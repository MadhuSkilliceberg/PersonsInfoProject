import { TestBed } from '@angular/core/testing';

import { TaskLogService } from './tasklog.service';

describe('TaskLogService', () => {
  let service: TaskLogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskLogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
