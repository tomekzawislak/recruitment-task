import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ScheduleService} from '../../services/schedule.service';
import {ScheduleItemComponent} from '../schedule-item/schedule-item.component';
import {AsyncPipe, NgFor, NgIf} from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss'],
  imports: [ScheduleItemComponent, NgIf, NgFor, AsyncPipe],
  providers: [ScheduleService],
  changeDetection: ChangeDetectionStrategy.OnPush // TODO: check on filtering and date change
})
export class ScheduleComponent {
  public schedule$ = this.scheduleService.schedule$;
  constructor(private readonly scheduleService: ScheduleService) {
  }
}
