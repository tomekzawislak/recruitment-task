import {Link, Rating, ShowDTO} from './show.model';

export class ScheduleItemDTO {
  public airdate: string;
  public airstamp: string;
  public airtime: string;
  public id: number;
  public image: unknown; // TODO: type
  public name: string;
  public number: number;
  public rating: Rating;
  public runtime: number;
  public season: number;
  public summary: string;
  public type: string; // TODO: enum -> values: "regular"
  public url: string;
  private _embedded: {show: ShowDTO};
  private _links: {self: Link, show: Link};

  constructor(scheduleItemDTO: ScheduleItemDTO) {
    this.airdate = scheduleItemDTO.airdate;
    this.airstamp = scheduleItemDTO.airstamp;
    this.airtime = scheduleItemDTO.airtime;
    this.id = scheduleItemDTO.id;
    this.image = scheduleItemDTO.image;
    this.name = scheduleItemDTO.name;
    this.number = scheduleItemDTO.number;
    this.rating = scheduleItemDTO.rating;
    this.runtime = scheduleItemDTO.runtime;
    this.season = scheduleItemDTO.season;
    this.summary = scheduleItemDTO.summary;
    this.type = scheduleItemDTO.type;
    this.url = scheduleItemDTO.url;
    this._embedded = scheduleItemDTO._embedded;
    this._links = scheduleItemDTO._links;
  }

}

export class ScheduleItem extends ScheduleItemDTO {
  constructor(scheduleItemDTO: ScheduleItemDTO) {
    super(scheduleItemDTO);
  }

  public get DTO(): ScheduleItemDTO {
    return new ScheduleItemDTO(this);
  }
}
