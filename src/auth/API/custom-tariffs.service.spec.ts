import { TestBed } from '@angular/core/testing';

import { CustomTariffsService } from './custom-tariffs.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CustomTariffsService', () => {
  let service: CustomTariffsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(CustomTariffsService);
  });

  it('should be created', () => {
    const service: CustomTariffsService = TestBed.get(CustomTariffsService);
    expect(service).toBeTruthy();
  });

  it('should have get function', () => {
      const service: CustomTariffsService = TestBed.get(CustomTariffsService);
      expect(service.get).toBeTruthy();
  });

  it('should have getNumber function', () => {
    expect(service.getNumber).toBeTruthy();
  });

  it('should have getInformation function', () => {
    expect(service.getInormation).toBeTruthy();
  });

  it('should have uploadFile function',() => {
    expect(service.uploadFile).toBeTruthy();
  });

});
