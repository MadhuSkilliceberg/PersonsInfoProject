import { TestBed } from '@angular/core/testing';

import { CompanyEmailsService } from './companyemails.service';

describe('CompanyEmailsService', () => {
  let service: CompanyEmailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompanyEmailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
