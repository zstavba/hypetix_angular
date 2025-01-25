import { TestBed } from '@angular/core/testing';

import { DebitNotesService } from './debit-notes.service';

describe('DebitNotesService', () => {
  let service: DebitNotesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DebitNotesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
