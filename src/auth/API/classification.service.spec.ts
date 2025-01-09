import { TestBed } from '@angular/core/testing';

import { ClassificationService } from './classification.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ClassificationService', () => {
  let service: ClassificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(ClassificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have get function', () => {
      expect(service.get).toBeTruthy();
  });
});
