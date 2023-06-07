export interface Channel {
  id: number;
  name: string;
  country: Country;
  officialSite: string;
}

export interface Country {
  name: string;
  code: string;
  timezone: string;
}

export interface Rating {
  average: number | null;
}

export interface Link {
  href: string;
}

export class ShowDTO {
  public averageRuntime: number;
  public dvdCountry: null; // TODO
  public ended: null; // TODO
  public externals: {tvrage: number; thetvdb: number; imdb: string;};
  public genres: string[];
  public id: number;
  public image: {medium: string; original: string;}
  public language: string;
  public name: string;
  public network: Channel;
  public officialSite: string;
  public premiered: string;
  public rating: Rating;
  public runtime: number;
  public schedule: {time: string; days: string[];}
  public status: string;
  public summary: string;
  public type: string; // TODO: enum?
  public updated: number;
  public url: string;
  public webChannel: Channel;
  public weight: number;
  private _links: {self: Link, previousepisode: Link}

  constructor(showDTO: ShowDTO) {
    this.averageRuntime = showDTO.averageRuntime;
    this.dvdCountry = showDTO.dvdCountry;
    this.ended = showDTO.ended;
    this.externals = showDTO.externals;
    this.genres = showDTO.genres;
    this.id = showDTO.id;
    this.image = showDTO.image;
    this.language = showDTO.language;
    this.name = showDTO.name;
    this.network = showDTO.network;
    this.officialSite = showDTO.officialSite;
    this.premiered = showDTO.premiered;
    this.rating = showDTO.rating;
    this.runtime = showDTO.runtime;
    this.schedule = showDTO.schedule;
    this.status = showDTO.status;
    this.summary = showDTO.summary;
    this.type = showDTO.type;
    this.updated = showDTO.updated;
    this.url = showDTO.url;
    this.webChannel = showDTO.webChannel;
    this.weight = showDTO.weight;
    this._links = showDTO._links;
  }
}

export class Show extends ShowDTO {
  constructor(showDTO: ShowDTO) {
    super(showDTO);
  }

  public get DTO(): ShowDTO {
    return new ShowDTO(this);
  }
}
