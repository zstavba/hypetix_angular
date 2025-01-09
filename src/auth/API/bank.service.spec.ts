import { TestBed } from '@angular/core/testing';

import { BankService } from './bank.service';
import { ArticleTypeService } from './article-type.service';
import { shareReplay } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('BankService', () => {
  let service: BankService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(BankService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have getCountry function', () => {
    expect(service.getCountry).toBeTruthy();
  });

  it('should have getNumberCountry function', () => {
    expect(service.getNumberCuntry).toBeTruthy();
  })

  it('should have getZipCode function', () => {
      expect(service.getZipCode).toBeTruthy();
  });

  it('should have getZIpCodeNumber functiion', () => {
    expect(service.getZIpCodeNumber).toBeTruthy();
  });

  it('should have getFlags function', () => {
    expect(service.getFlags).toBeTruthy();
  });

  it('should have getFlasg function', () => {
    expect(service.getFlags).toBeTruthy();
  });

  it('should have getAreas function', () => {
      expect(service.getAreas).toBeTruthy();
  });


});
