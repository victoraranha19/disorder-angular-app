import { TestBed } from '@angular/core/testing';

import { CarteirasService } from './carteiras.service';

describe('CarteirasService', () => {
  let service: CarteirasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarteirasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
