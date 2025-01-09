import { TestBed } from '@angular/core/testing';

import { MeassurmentUnitsService } from './meassurment-units.service';

describe('MeassurmentUnitsService', () => {
  let service: MeassurmentUnitsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MeassurmentUnitsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
