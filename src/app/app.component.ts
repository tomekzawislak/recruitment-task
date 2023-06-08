import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {filter, map, Subscription} from 'rxjs';
import {ScheduleService} from './schedule/services/schedule.service';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  public title = '';

  private subscriptions = new Subscription();
  constructor(private readonly router: Router,
              private readonly scheduleService: ScheduleService) {
  }

  ngOnInit(): void {
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
        .subscribe((title) => {
          if (title) {
            this.title = title;
          }
        })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  public changeSelectedDate(event: MatDatepickerInputEvent<any>): void {
    console.log(event)
    this.scheduleService.emitSelectedDate(event.value); // TODO: MatDatepickerInputEvent<Date> as type
  }
}
