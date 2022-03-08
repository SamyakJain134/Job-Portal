import { TestBed } from '@angular/core/testing';

import { JobspostService } from './jobspost.service';

describe('JobspostService', () => {
  let service: JobspostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobspostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
