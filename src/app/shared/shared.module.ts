import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HoursMinutesPipe } from './pipes/hours-minutes.pipe';



@NgModule({
  declarations: [
    HoursMinutesPipe
  ],
  exports: [
    HoursMinutesPipe
  ],
  imports: [
    CommonModule,
  ]
})
export class SharedModule { }
