import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ScheduleComponent} from './schedule/components/schedule/schedule.component';

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
    path: '**',
    redirectTo: 'schedule' // TODO
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
