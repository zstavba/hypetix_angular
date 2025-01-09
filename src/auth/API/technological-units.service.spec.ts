import { TestBed } from '@angular/core/testing';

import { TechnologicalUnitsService } from './technological-units.service';

describe('TechnologicalUnitsService', () => {
  let service: TechnologicalUnitsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TechnologicalUnitsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
