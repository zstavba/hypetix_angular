import { TestBed } from '@angular/core/testing';

import { TechnologicalProcessesService } from './technological-processes.service';

describe('TechnologicalProcessesService', () => {
  let service: TechnologicalProcessesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TechnologicalProcessesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
