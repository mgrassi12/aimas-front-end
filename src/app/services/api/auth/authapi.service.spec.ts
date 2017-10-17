import { TestBed, inject } from '@angular/core/testing';
import { APIImports, APIProviders } from '../../../../test.global';


import { AuthAPIService } from './authapi.service';

describe('AuthapiService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                APIImports
            ],
            providers: [
                APIProviders,
                AuthAPIService
            ]
        });
    });

    it('should be created', inject([AuthAPIService], (service: AuthAPIService) => {
        expect(service).toBeTruthy();
    }));
});
