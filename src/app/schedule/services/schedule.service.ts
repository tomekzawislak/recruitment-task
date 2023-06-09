import {Injectable, OnDestroy} from '@angular/core';
import {DataService} from '../../shared/services/data.service';
import {BehaviorSubject, map, Observable, ReplaySubject, Subscription, switchMap, tap} from 'rxjs';
import {ScheduleItem, ScheduleItemDTO} from '../../shared/models/schedule-item.model';
import {formatDateToString} from '../../shared/functions/date.function';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService implements OnDestroy {
  private _schedule$ = new ReplaySubject<ScheduleItem[]>(1);
  public schedule$ = this._schedule$.asObservable();

  private _genresList$ = new ReplaySubject<string[]>(1);
  public genresList$ = this._genresList$.asObservable();

  private _selectedGenres$ = new BehaviorSubject<string[]>([]);
  public selectedGenres$ = this._selectedGenres$.asObservable();

  private _selectedDate$ = new BehaviorSubject<Date>(new Date);
  public selectedDate$ =this._selectedDate$.asObservable();

  private readonly _NOT_SPECIFIED = '(Not specified)';
  public get NOT_SPECIFIED(): string {
    return this._NOT_SPECIFIED;
  }

  private subscriptions = new Subscription();

  constructor(private readonly dataService: DataService) {
    this.initSelectedDateSubscription();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  public emitSelectedDate$(value: Date): void {
    this._selectedDate$.next(value);
  }

  public emitSelectedGenres$(value: string[]): void {
    this._selectedGenres$.next(value);
  }

  private initSelectedDateSubscription(): void {
    this.subscriptions.add(
      this.selectedDate$
        .pipe(
          map((date: Date) => formatDateToString(date)),
          switchMap((date: string) => this.getSchedule$(date)),
          tap((data: ScheduleItem[]) => {
            this._genresList$.next(this.getUniqueGenresList(data));
            this._schedule$.next(data);
          })
        )
        .subscribe()
    );
  }

  private getUniqueGenresList(data: ScheduleItem[]): string[] {
    const genres = data.map((scheduleItem: ScheduleItem) => scheduleItem.genres).flat();
    const unique = [...new Set(genres)].sort();
    unique.unshift(this.NOT_SPECIFIED);
    return unique;
  }

  private getSchedule$(date: string, country?: string): Observable<ScheduleItem[]> {
    return this.dataService.fetchSchedule$(date, country).pipe(
      map((schedule: ScheduleItemDTO[]) =>
        schedule.map((scheduleItemDTO: ScheduleItemDTO) => new ScheduleItem(scheduleItemDTO)))
    )
  }
}
