import { TestBed } from '@angular/core/testing';

import { UserTypesService } from './usertypes.service';

describe('UserTypesService', () => {
  let service: UserTypesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserTypesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
