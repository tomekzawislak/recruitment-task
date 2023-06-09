import {Injectable, OnDestroy} from '@angular/core';
import {DataService} from '../../shared/services/data.service';
import {catchError, map, Observable, Subject, Subscription, tap, throwError} from 'rxjs';
import {Show, ShowDTO} from '../../shared/models/show.model';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpErrorResponse} from '@angular/common/http';

@Injectable()
export class ShowService implements OnDestroy {
  private _show$ = new Subject<Show>();
  public show$ = this._show$.asObservable();

  private subscriptions = new Subscription();

  constructor(private readonly dataService: DataService,
              private readonly route: ActivatedRoute,
              private readonly router: Router) {
    this.initShowSubscription();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  public backToSchedule(): void {
    this.router.navigate(['schedule'])
  }

  private initShowSubscription(): void {
    this.subscriptions.add(
      this.getShowDetails$(this.route.snapshot.params['id'])
        .pipe(
          tap((show: Show) => this._show$.next(show))
        )
        .subscribe()
    );
  }

  private getShowDetails$(id: number): Observable<Show> {
    return this.dataService.fetchShowDetails$(id).pipe(
      map((showDTO: ShowDTO) => new Show(showDTO))
    )
  }
}
