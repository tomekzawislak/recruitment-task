import {Image, Link, Rating, ShowDTO} from './show.model';

export class ScheduleItemDTO {
  public airdate: string;
  public airstamp: string;
  public airtime: string;
  public id: number;
  public image: Image;
  public name: string;
  public number: number;
  public rating: Rating;
  public runtime: number;
  public season: number;
  public summary: string;
  public type: string; // TODO: create enum with possible values and use as type here
  public url: string;
  private readonly _embedded: {show: ShowDTO};
  private readonly _links: {self: Link, show: Link};

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

  public get embedded(): {show: ShowDTO} {
    return this._embedded;
  }

}

export class ScheduleItem extends ScheduleItemDTO {
  constructor(scheduleItemDTO: ScheduleItemDTO) {
    super(scheduleItemDTO);
  }

  public get cardCover(): string {
    return this.embedded.show.image.medium;
  }

  public get showTitle(): string {
    return this.embedded.show.name;
  }

  public get showId(): number {
    return this.embedded.show.id;
  }

  public get DTO(): ScheduleItemDTO {
    return new ScheduleItemDTO(this);
  }
}
