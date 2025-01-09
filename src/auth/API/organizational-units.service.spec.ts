import { TestBed } from '@angular/core/testing';

import { OrganizationalUnitsService } from './organizational-units.service';

describe('OrganizationalUnitsService', () => {
  let service: OrganizationalUnitsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrganizationalUnitsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
