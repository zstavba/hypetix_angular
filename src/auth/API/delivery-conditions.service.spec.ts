import { TestBed } from '@angular/core/testing';

import { DeliveryConditionsService } from './delivery-conditions.service';

describe('DeliveryConditionsService', () => {
  let service: DeliveryConditionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeliveryConditionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
