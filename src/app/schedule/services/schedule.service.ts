import {Injectable, OnDestroy} from '@angular/core';
import {DataService} from '../../shared/services/data.service';
import {BehaviorSubject, map, Observable, of, ReplaySubject, Subscription, switchMap, tap} from 'rxjs';
import {ScheduleItem, ScheduleItemDTO} from '../../shared/models/schedule-item.model';
import {formatDate} from '../../shared/functions/date.function';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService implements OnDestroy {
  private _schedule$ = new ReplaySubject<ScheduleItem[]>(1);
  public schedule$ = this._schedule$.asObservable();

  private _selectedDate$ = new BehaviorSubject<Date>(new Date);
  public selectedDate$ =this._selectedDate$.asObservable();

  private subscriptions = new Subscription();

  constructor(private readonly dataService: DataService) {
    this.initSelectedDateSubscription();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  private initSelectedDateSubscription(): void {
    this.subscriptions.add(
      this.selectedDate$
        .pipe(
          map((date: Date) => formatDate(date)),
          switchMap((date: string) => this.getSchedule$(date)),
          tap((data: ScheduleItem[]) => this._schedule$.next(data))
        )
        .subscribe()
    );
  }

  private getSchedule$(date: string, country?: string): Observable<ScheduleItem[]> {
    return this.dataService.fetchSchedule$(date, country).pipe(
      map((schedule: ScheduleItemDTO[]) =>
        schedule.map((scheduleItemDTO: ScheduleItemDTO) => new ScheduleItem(scheduleItemDTO)))
    )
  }
}
