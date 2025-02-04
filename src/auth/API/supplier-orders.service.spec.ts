import { TestBed } from '@angular/core/testing';

import { SupplierOrdersService } from './supplier-orders.service';

describe('SupplierOrdersService', () => {
  let service: SupplierOrdersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SupplierOrdersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
