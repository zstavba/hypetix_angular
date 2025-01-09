import { TestBed } from '@angular/core/testing';

import { ClassificationWorkProceduressService } from './classification-work-proceduress.service';

describe('ClassificationWorkProceduressService', () => {
  let service: ClassificationWorkProceduressService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClassificationWorkProceduressService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
