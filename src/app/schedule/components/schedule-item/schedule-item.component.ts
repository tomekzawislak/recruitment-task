import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {ScheduleItem} from '../../../shared/models/schedule-item.model';
import {MatCardModule} from '@angular/material/card';
import {HoursMinutesPipe} from '../../../shared/pipes/hours-minutes.pipe';
import {NgIf} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';

@Component({
  standalone: true,
  selector: 'app-schedule-item',
  templateUrl: './schedule-item.component.html',
  styleUrls: ['./schedule-item.component.scss'],
  imports: [MatCardModule, HoursMinutesPipe, NgIf, MatButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScheduleItemComponent {
  @Input() scheduleItem!: ScheduleItem;
}
