import { TestBed } from '@angular/core/testing';

import { TraitorService } from './traitor.service';

describe('TraitorService', () => {
  let service: TraitorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TraitorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
