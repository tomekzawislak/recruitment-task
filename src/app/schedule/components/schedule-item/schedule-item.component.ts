import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {ScheduleItem} from '../../../shared/models/schedule-item.model';

@Component({
  selector: 'app-schedule-item',
  templateUrl: './schedule-item.component.html',
  styleUrls: ['./schedule-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScheduleItemComponent {
  @Input() scheduleItem!: ScheduleItem;
  @Output() seeDetailsId = new EventEmitter<number>();

  public seeDetails(): void {
    this.seeDetailsId.emit(this.scheduleItem.showId);
  }
}
