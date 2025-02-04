import { TestBed } from '@angular/core/testing';

import { RatesheetService } from './ratesheet.service';

describe('RatesheetService', () => {
  let service: RatesheetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RatesheetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
