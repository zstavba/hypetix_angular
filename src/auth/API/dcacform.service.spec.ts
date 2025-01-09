import { TestBed } from '@angular/core/testing';

import { DCACFormService } from './dcacform.service';

describe('DCACFormService', () => {
  let service: DCACFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DCACFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
