import { TestBed } from '@angular/core/testing';

import { GlobalmonedasService } from './globalmonedas.service';

describe('GlobalmonedasService', () => {
  let service: GlobalmonedasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalmonedasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
