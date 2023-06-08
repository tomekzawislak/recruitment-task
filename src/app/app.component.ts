import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router, RouterModule} from '@angular/router';
import {filter, map, Subscription} from 'rxjs';
import {CommonModule} from '@angular/common';
import {MatNativeDateModule} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [CommonModule, RouterModule, MatNativeDateModule, MatDatepickerModule, MatFormFieldModule, MatInputModule]
})
export class AppComponent implements OnInit, OnDestroy {
  public title = '';

  private subscriptions = new Subscription();
  constructor(private readonly router: Router) {
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
}
