import { TestBed } from '@angular/core/testing';

import { UnitAboveStorageService } from './unit-above-storage.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('UnitAboveStorageService', () => {
  let service: UnitAboveStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(UnitAboveStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have get function',() => {
    expect(service.get).toBeTruthy();
  });
});
