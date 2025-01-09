import { TestBed } from '@angular/core/testing';

import { UpnCodesService } from './upn-codes.service';

describe('UpnCodesService', () => {
  let service: UpnCodesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpnCodesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
