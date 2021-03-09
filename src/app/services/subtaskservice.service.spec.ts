import { TestBed } from '@angular/core/testing';

import { SubtaskserviceService } from './subtaskservice.service';

describe('SubtaskserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SubtaskserviceService = TestBed.get(SubtaskserviceService);
    expect(service).toBeTruthy();
  });
});
