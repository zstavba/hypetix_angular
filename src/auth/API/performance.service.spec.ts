import { TestBed } from '@angular/core/testing';

import { PerformanceService } from './performance.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PerformanceService', () => {
  let service: PerformanceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(PerformanceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have get function', () => {
      expect(service.get).toBeTruthy();
  });

  it('should have getInformation function', () => {
      expect(service.getInformation).toBeTruthy();
  });

});
