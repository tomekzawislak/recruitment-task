import {Pipe, PipeTransform} from '@angular/core';
import {formatTimeToString} from '../functions/date.function';

@Pipe({
  name: 'hoursMinutes'
})
export class HoursMinutesPipe implements PipeTransform {

  transform(value: string): string {
    return formatTimeToString(value);
  }

}
