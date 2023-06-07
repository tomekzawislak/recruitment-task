import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private static baseUrl = 'https://api.tvmaze.com'; // TODO: move to environment file

  constructor(private readonly httpClient: HttpClient) { }

  private readonly ENDPOINTS = {
    SCHEDULE_URL: (date: string, country: string) => `${DataService.baseUrl}/schedule/web?date=${date}&country=${country}`,
    SHOWS_URL: (id: number) => `${DataService.baseUrl}/shows/${id}`,
  }

  public fetchSchedule$(date: string, country: string = 'US') {
    return this.httpClient.get(this.ENDPOINTS.SCHEDULE_URL(date, country));
  }

  public fetchShowDetails$(id: number) {
    return this.httpClient.get(this.ENDPOINTS.SHOWS_URL(id));
  }
}
