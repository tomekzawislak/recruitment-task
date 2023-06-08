import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {FormControl} from '@angular/forms';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
import {filter, map, Subscription, tap} from 'rxjs';
import {ScheduleService} from './schedule/services/schedule.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  public title = '';
  public selectedDate = new FormControl();

  private subscriptions = new Subscription();
  constructor(private readonly router: Router,
              private readonly scheduleService: ScheduleService) {
  }

  ngOnInit(): void {
    this.initRouterEventsSubscription();
    this.initSelectedDateSubscription();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  public changeSelectedDate(event: MatDatepickerInputEvent<any>): void {
    this.scheduleService.emitSelectedDate$(event.value); // TODO: MatDatepickerInputEvent<Date> as type
  }

  private initRouterEventsSubscription(): void {
    this.subscriptions.add(
      this.router.events
        .pipe(
          filter((event) => event instanceof NavigationEnd),
          map(() => {
            let route: ActivatedRoute = this.router.routerState.root;
            let routeTitle = '';
            while (route!.firstChild) {
              route = route.firstChild;
            }
            if (route.snapshot.data['title']) {
              routeTitle = route!.snapshot.data['title'];
            }
            return routeTitle;
          })
        )
        .subscribe((title: string) => {
          if (title) {
            this.title = title;
          }
        })
    );
  }

  private initSelectedDateSubscription(): void {
    this.subscriptions.add(
      this.scheduleService.selectedDate$
        .pipe(
          tap((date: Date) => this.selectedDate.patchValue(date)),
        )
        .subscribe()
    );
  }
}
