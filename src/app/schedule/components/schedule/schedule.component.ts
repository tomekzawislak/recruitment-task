import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ScheduleService} from '../../services/schedule.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush // TODO: check on filtering and date change
})
export class ScheduleComponent {
  public schedule$ = this.scheduleService.schedule$;
  constructor(private readonly scheduleService: ScheduleService) {
  }
}
