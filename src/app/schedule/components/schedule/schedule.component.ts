import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ScheduleService} from '../../services/schedule.service';
import {Router} from '@angular/router';
import {combineLatest, map, tap} from 'rxjs';
import {ScheduleItem} from '../../../shared/models/schedule-item.model';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScheduleComponent {
  public schedule$ = this.scheduleService.schedule$
  public filteredSchedule$ = this.scheduleService.filteredSchedule$;

  constructor(private readonly scheduleService: ScheduleService,
              private readonly router: Router) {
  }

  public navigateToDetails(id: number): void {
    this.router.navigate(['details', id]);
  }
}
