import { TestBed } from '@angular/core/testing';

import { WorkCenterClassificationService } from './work-center-classification.service';

describe('WorkCenterClassificationService', () => {
  let service: WorkCenterClassificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkCenterClassificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
