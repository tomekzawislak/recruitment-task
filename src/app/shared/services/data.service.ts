import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ScheduleItemDTO} from '../models/schedule-item.model';
import {ShowDTO} from '../models/show.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private static baseUrl = 'https://api.tvmaze.com'; // TODO: move to environment file

  constructor(private readonly httpClient: HttpClient) { }

  private readonly ENDPOINTS = {
    SCHEDULE_URL: (date: string, country: string) => `${DataService.baseUrl}/schedule/web?date=${date}&country=${country}`,
    SHOW_URL: (id: number) => `${DataService.baseUrl}/shows/${id}`,
  }

  public fetchSchedule$(date: string, country: string = 'US'): Observable<ScheduleItemDTO[]> {
    return this.httpClient.get<ScheduleItemDTO[]>(this.ENDPOINTS.SCHEDULE_URL(date, country));
  }

  public fetchShowDetails$(id: number): Observable<ShowDTO> {
    return this.httpClient.get<ShowDTO>(this.ENDPOINTS.SHOW_URL(id));
  }
}
