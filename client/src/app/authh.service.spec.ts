import { TestBed, inject } from '@angular/core/testing';

import { AuthhService } from './authh.service';

describe('AuthhService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthhService]
    });
  });

  it('should ...', inject([AuthhService], (service: AuthhService) => {
    expect(service).toBeTruthy();
  }));
});
