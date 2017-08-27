import { TestBed, inject } from '@angular/core/testing';
import { APIImports } from '../../../../test.global';


import { AuthAPIService } from './authapi.service';
import { SharedService } from '../../shared/shared.service';

describe('AuthapiService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                ...APIImports
            ],
            providers: [
                SharedService,
                AuthAPIService
            ]
        });
    });

    it('should be created', inject([AuthAPIService], (service: AuthAPIService) => {
        expect(service).toBeTruthy();
    }));
});
