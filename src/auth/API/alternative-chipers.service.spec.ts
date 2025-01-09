import { TestBed } from '@angular/core/testing';

import { AlternativeChipersService } from './alternative-chipers.service';

describe('AlternativeChipersService', () => {
  let service: AlternativeChipersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlternativeChipersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
