import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ShowService} from '../../services/show.service';
import {Observable} from 'rxjs';
import {Show} from '../../../shared/models/show.model';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss'],
  providers: [ShowService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShowComponent {
  public show$: Observable<Show> = this.showService.show$;

  constructor(private readonly showService: ShowService) {
  }

  public backToSchedule(): void {
    this.showService.backToSchedule();
  }
}
