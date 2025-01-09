import { TestBed } from '@angular/core/testing';

import { WorkSheetService } from './work-sheet.service';

describe('WorkSheetService', () => {
  let service: WorkSheetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkSheetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
