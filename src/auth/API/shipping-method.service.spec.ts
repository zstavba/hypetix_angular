import { TestBed } from '@angular/core/testing';

import { ShippingMethodService } from './shipping-method.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ShippingMethodService', () => {
  let service: ShippingMethodService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(ShippingMethodService);
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

  it('should have upload function',() => {
    expect(service.upload).toBeTruthy();
  });

});
