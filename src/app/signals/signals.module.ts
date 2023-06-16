import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SignalsComponent} from './components/signals/signals.component';
import {SignalsRoutingModule} from './signals-routing.module';
import {MatButtonModule} from '@angular/material/button';
import {MatChipsModule} from '@angular/material/chips';
import {SharedModule} from '../shared/shared.module';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    SignalsComponent
  ],
  imports: [
    CommonModule,
    SignalsRoutingModule,
    MatButtonModule,
    MatChipsModule,
    SharedModule,
    MatSlideToggleModule,
    FormsModule
  ]
})
export class SignalsModule { }
