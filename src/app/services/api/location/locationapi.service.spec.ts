import { TestBed, inject } from '@angular/core/testing';
import { APIImports, APIProviders } from '../../../../test.global';

import { LocationAPIService } from './locationapi.service';

describe('LocationAPIService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                APIImports
            ],
            providers: [
                APIProviders,
                LocationAPIService
            ]
        });
    });

    it('should be created', inject([LocationAPIService], (service: LocationAPIService) => {
        expect(service).toBeTruthy();
    }));
});
