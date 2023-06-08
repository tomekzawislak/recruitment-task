import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ShowComponent} from './components/show/show.component';
import {MatButtonModule} from '@angular/material/button';
import {MatChipsModule} from '@angular/material/chips';
import {MatBadgeModule} from '@angular/material/badge';



@NgModule({
  declarations: [
    ShowComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatChipsModule,
    MatBadgeModule
  ]
})
export class ShowModule { }
