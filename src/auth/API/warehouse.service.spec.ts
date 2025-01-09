import { TestBed } from '@angular/core/testing';

import { WarehouseService } from './warehouse.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('WarehouseService', () => {
  let service: WarehouseService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(WarehouseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have getList function', () => {
      expect(service.getList).toBeTruthy();
  });

  it('should have upload function', () => {
      expect(service.upload).toBeTruthy();
  });


});
