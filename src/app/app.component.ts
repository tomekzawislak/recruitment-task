import {Component} from '@angular/core';
import {DataService} from './shared/services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public data: any;
  constructor(private dataService: DataService) {
    // TODO remove!!! Just first test
    this.dataService.fetchSchedule$('2023-06-07').subscribe(res => {
      console.log(res);
      this.data = res;
    });
    this.dataService.fetchShowDetails$(49538).subscribe(res => {
      console.log('show', res);
    });
  }
}
