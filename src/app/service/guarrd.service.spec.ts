import { TestBed } from '@angular/core/testing';

import { GuarrdService } from './guarrd.service';

describe('GuarrdService', () => {
  let service: GuarrdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuarrdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
