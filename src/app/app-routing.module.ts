import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ScheduleComponent} from './schedule/components/schedule/schedule.component';
import {ShowComponent} from './show/components/show/show.component';

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
      title: 'Scheduled TV Shows'
    }
  },
  {
    path: 'details/:id',
    pathMatch: 'full',
    component: ShowComponent,
    title: 'Show details',
    data: {
      title: 'Show details'
    }
  },
  {
    path: '**',
    redirectTo: 'schedule' // TODO
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
