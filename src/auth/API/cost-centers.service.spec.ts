import { TestBed } from '@angular/core/testing';

import { CostCentersService } from './cost-centers.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CostCentersService', () => {
  let service: CostCentersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(CostCentersService);
  });

  it('should be created', () => {
    const service: CostCentersService = TestBed.get(CostCentersService);
    expect(service).toBeTruthy();
   });

   it('should have getData function', () => {
    const service: CostCentersService = TestBed.get(CostCentersService);
    expect(service.get).toBeTruthy();
   });

   it('should have get function', () => {
    expect(service.get).toBeTruthy();
   })

   it('should have getInformation function', () => {
    expect(service.getInformation).toBeTruthy();
   })
});
