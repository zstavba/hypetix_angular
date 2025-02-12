import { TestBed } from '@angular/core/testing';

import { ClassificationTechnologicalUnitsService } from './classification-technological-units.service';

describe('ClassificationTechnologicalUnitsService', () => {
  let service: ClassificationTechnologicalUnitsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClassificationTechnologicalUnitsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
