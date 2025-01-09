import { TestBed } from '@angular/core/testing';

import { CommercialStatesService } from './commercial-states.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CommercialStatesService', () => {
  let service: CommercialStatesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(CommercialStatesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have getByType function', () => {
    expect(service.getByType).toBeTruthy();
  })

  it('should have deleteManyByType function', () => {
    expect(service.deleteManyByType).toBeTruthy();
  });

  it('should have deleteByID function', () => {
    expect(service.deleteByID).toBeTruthy();
  });

});
