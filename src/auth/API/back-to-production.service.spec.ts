import { TestBed } from '@angular/core/testing';

import { BackToProductionService } from './back-to-production.service';

describe('BackToProductionService', () => {
  let service: BackToProductionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackToProductionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
