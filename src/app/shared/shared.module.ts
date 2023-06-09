import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HoursMinutesPipe } from './pipes/hours-minutes.pipe';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';



@NgModule({
  declarations: [
    HoursMinutesPipe,
    SafeHtmlPipe
  ],
  exports: [
    HoursMinutesPipe,
    SafeHtmlPipe
  ],
  imports: [
    CommonModule,
  ]
})
export class SharedModule { }
