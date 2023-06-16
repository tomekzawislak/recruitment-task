import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ShowComponent} from './components/show/show.component';
import {MatButtonModule} from '@angular/material/button';
import {MatChipsModule} from '@angular/material/chips';
import {MatBadgeModule} from '@angular/material/badge';
import {ShowRoutingModule} from './show-routing.module';
import {SharedModule} from '../shared/shared.module';



@NgModule({
    declarations: [
      ShowComponent
    ],
    imports: [
        CommonModule,
        ShowRoutingModule,
        MatButtonModule,
        MatChipsModule,
        MatBadgeModule,
        SharedModule
    ]
})
export class ShowModule { }
