import { TestBed } from '@angular/core/testing';

import { EmploymentTypesService } from './employmenttypes.service';

describe('EmploymentTypesService', () => {
  let service: EmploymentTypesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmploymentTypesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
