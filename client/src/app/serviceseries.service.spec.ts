import { TestBed, inject } from '@angular/core/testing';

import { ServiceseriesService } from './serviceseries.service';

describe('ServiceseriesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiceseriesService]
    });
  });

  it('should ...', inject([ServiceseriesService], (service: ServiceseriesService) => {
    expect(service).toBeTruthy();
  }));
});
