import { TestBed } from '@angular/core/testing';

import { BeersService } from './beers.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('BeersService', () => {
  let service: BeersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(BeersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
