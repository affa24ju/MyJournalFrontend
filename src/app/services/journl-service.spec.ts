import { TestBed } from '@angular/core/testing';

import { JournlService } from './journl-service';

describe('JournlService', () => {
  let service: JournlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JournlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
