import { Component } from '@angular/core';
import {ScheduleService} from '../../services/schedule.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent {
  public schedule$ = this.scheduleService.schedule$;
  constructor(private readonly scheduleService: ScheduleService) {
  }
}
