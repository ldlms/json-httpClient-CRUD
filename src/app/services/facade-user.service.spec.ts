import { TestBed } from '@angular/core/testing';

import { FacadeUserService } from './facade-user.service';

describe('FacadeUserService', () => {
  let service: FacadeUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FacadeUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
