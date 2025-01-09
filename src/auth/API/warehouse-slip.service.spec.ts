import { TestBed } from '@angular/core/testing';

import { WarehouseSlipService } from './warehouse-slip.service';

describe('WarehouseSlipService', () => {
  let service: WarehouseSlipService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WarehouseSlipService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
