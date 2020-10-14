import { TestBed } from '@angular/core/testing';

import { DonutDataService } from './donut-data.service';

describe('DonutDataService', () => {
  let service: DonutDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DonutDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
