import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {DataService} from './shared/services/data.service';
import {HttpClientModule} from '@angular/common/http';
import {ScheduleModule} from './schedule/schedule.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ScheduleModule,
    BrowserAnimationsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
