import { TestBed } from '@angular/core/testing';

import { CurrencieService } from './currencie.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CurrencieService', () => {
  let service: CurrencieService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(CurrencieService);
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

  it('should have upload function', () => {
    expect(service.upload).toBeTruthy();
  });

});
