import { TestBed } from '@angular/core/testing';

import { MaterialSheetService } from './material-sheet.service';

describe('MaterialSheetService', () => {
  let service: MaterialSheetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaterialSheetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
