import { TestBed, inject } from '@angular/core/testing';

import { ReservationAPIService } from './reservationapi.service';

describe('ReervationapiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReservationAPIService]
    });
  });

  it('should be created', inject([ReservationAPIService], (service: ReservationAPIService) => {
    expect(service).toBeTruthy();
  }));
});
