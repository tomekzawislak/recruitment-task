import { TestBed } from '@angular/core/testing';

import { ScheduleService } from './schedule.service';
import {DataService} from '../../shared/services/data.service';

describe('ScheduleService', () => {
  let service: ScheduleService;
  let dataServiceSpy: jasmine.SpyObj<DataService>;

  beforeEach(() => {
    dataServiceSpy = jasmine.createSpyObj('DataService', ['fetchSchedule$', 'fetchShowDetails$']);
    TestBed.configureTestingModule({
      providers: [
        {
          provide: DataService,
          useValue: dataServiceSpy
        }
      ]
    });
    service = TestBed.inject(ScheduleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
