import {Pipe, PipeTransform} from '@angular/core';
import {formatTime} from '../functions/date.function';

@Pipe({
  name: 'hoursMinutes'
})
export class HoursMinutesPipe implements PipeTransform {

  transform(value: string): string {
    return formatTime(value);
  }

}
