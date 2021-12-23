import { TestBed } from '@angular/core/testing';

import { GlobalmonedasService } from './globalmonedas.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('GlobalmonedasService', () => {
  let service: GlobalmonedasService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(GlobalmonedasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
