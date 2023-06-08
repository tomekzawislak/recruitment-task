import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {bootstrapApplication, BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app/app.component';
import {provideRouter, Routes} from '@angular/router';
import {ScheduleComponent} from './app/schedule/components/schedule/schedule.component';
import {HttpClientModule} from '@angular/common/http';
import {DataService} from './app/shared/services/data.service';
import {ScheduleService} from './app/schedule/services/schedule.service';
import {importProvidersFrom} from '@angular/core';

// import { AppModule } from './app/app.module';


// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));

const routes: Routes = [
  {
    path: '',
    redirectTo: 'schedule',
    pathMatch: 'full'
  },
  {
    path: 'schedule',
    pathMatch: 'full',
    component: ScheduleComponent,
    title: 'TV Shows',
    data: {
      title: 'TV Shows scheduled for'
    }
  },
  {
    path: '**',
    redirectTo: 'schedule' // TODO
  }
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    ScheduleService,
    importProvidersFrom(HttpClientModule),
  ]
}).catch(err => console.error(err));
