import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { ScheduleItemComponent } from './components/schedule-item/schedule-item.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {SharedModule} from '../shared/shared.module';
import {ScheduleRoutingModule} from './schedule-routing.module';



@NgModule({
  declarations: [
    ScheduleComponent,
    ScheduleItemComponent
  ],
  imports: [
    CommonModule,
    ScheduleRoutingModule,
    MatCardModule,
    MatButtonModule,
    NgOptimizedImage,
    SharedModule
  ],
  exports: [
    ScheduleComponent,
    ScheduleItemComponent
  ]
})
export class ScheduleModule { }
