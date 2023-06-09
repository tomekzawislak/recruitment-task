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
  public scheduleList$ = combineLatest([
    this.scheduleService.schedule$,
    this.scheduleService.selectedGenres$
  ]).pipe(
    map(([schedule, filter]: [ScheduleItem[], string[]]) => {
      if (!filter || filter.length === 0) {
        return schedule;
      }
      return schedule.filter((scheduleItem: ScheduleItem) => {
        const genres = scheduleItem.genres;
        if (!genres.length) {
          return filter.includes(this.scheduleService.NOT_SPECIFIED);
        }
        return !!genres.filter((genre: string) => filter.includes(genre)).length
      })
    })
  );

  constructor(private readonly scheduleService: ScheduleService,
              private readonly router: Router) {
  }

  public navigateToDetails(id: number): void {
    this.router.navigate(['details', id]);
  }
}
