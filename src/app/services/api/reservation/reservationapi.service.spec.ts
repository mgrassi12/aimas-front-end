import { TestBed, inject } from '@angular/core/testing';
import { APIImports, APIProviders } from '../../../../test.global';

import { ReservationAPIService } from './reservationapi.service';

describe('ReervationapiService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                APIImports
            ],
            providers: [
                APIProviders,
                ReservationAPIService
            ]
        });
    });

    it('should be created', inject([ReservationAPIService], (service: ReservationAPIService) => {
        expect(service).toBeTruthy();
    }));
});
