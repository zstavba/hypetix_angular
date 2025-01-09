import { TestBed } from '@angular/core/testing';

import { WorkProceduresService } from './work-procedures.service';

describe('WorkProceduresService', () => {
  let service: WorkProceduresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkProceduresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
