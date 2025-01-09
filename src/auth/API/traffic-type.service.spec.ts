import { TestBed } from '@angular/core/testing';

import { TrafficTypeService } from './traffic-type.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('TrafficTypeService', () => {
  let service: TrafficTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(TrafficTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have get function',() => {
    expect(service.get).toBeTruthy();
  })

});
