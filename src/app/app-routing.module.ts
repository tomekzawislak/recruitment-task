import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'schedule',
    pathMatch: 'full'
  },
  {
    path: 'schedule',
    loadChildren: () => import('./schedule/schedule.module').then(m => m.ScheduleModule),
    title: 'TV Shows',
    data: {
      title: 'Scheduled TV Shows'
    }
  },
  {
    path: 'details/:id',
    loadChildren: () => import('./show/show.module').then(m => m.ShowModule),
    title: 'Show details',
    data: {
      title: 'Show details'
    }
  },
  {
    path: 'signals',
    loadChildren: () => import('./signals/signals.module').then(m => m.SignalsModule),
    title: 'Testing signals',
    data: {
      title: 'Testing signals'
    }
  },
  {
    path: '**',
    redirectTo: 'schedule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
