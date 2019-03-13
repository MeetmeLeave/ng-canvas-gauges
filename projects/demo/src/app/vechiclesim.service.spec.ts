import { TestBed } from '@angular/core/testing';

import { VechiclesimService } from './vechiclesim.service';

describe('VechiclesimService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VechiclesimService = TestBed.get(VechiclesimService);
    expect(service).toBeTruthy();
  });
});
