import { TestBed } from '@angular/core/testing';

import { CSVProcessorService } from './csvprocessor.service';

describe('CSVProcessorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CSVProcessorService = TestBed.get(CSVProcessorService);
    expect(service).toBeTruthy();
  });
});
