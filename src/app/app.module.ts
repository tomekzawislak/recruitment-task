import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DataService} from './shared/services/data.service';
import {HttpClientModule} from '@angular/common/http';
import {ScheduleModule} from './schedule/schedule.module';
import {MatNativeDateModule} from '@angular/material/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ShowModule} from './show/show.module';
import {CoreModule} from './core/core.module';
import {SignalsModule} from './signals/signals.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    ScheduleModule,
    ShowModule,
    SignalsModule,
    MatNativeDateModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
