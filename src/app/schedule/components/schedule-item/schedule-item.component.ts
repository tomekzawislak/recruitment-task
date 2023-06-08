import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {ScheduleItem} from '../../../shared/models/schedule-item.model';

@Component({
  selector: 'app-schedule-item',
  templateUrl: './schedule-item.component.html',
  styleUrls: ['./schedule-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScheduleItemComponent {
  @Input() scheduleItem!: ScheduleItem;
}
