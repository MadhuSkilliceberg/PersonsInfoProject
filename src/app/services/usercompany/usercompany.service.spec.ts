import { TestBed } from '@angular/core/testing';

import { UserCompanyService } from './usercompany.service';

describe('UserCompanyService', () => {
  let service: UserCompanyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserCompanyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
