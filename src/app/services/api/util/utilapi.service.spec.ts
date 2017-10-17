import { TestBed, inject } from '@angular/core/testing';
import { APIImports, APIProviders } from '../../../../test.global';

import { UtilAPIService } from './utilapi.service';

describe('UtilAPIService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                APIImports
            ],
            providers: [
                APIProviders,
                UtilAPIService
            ]
        });
    });

    it('should be created', inject([UtilAPIService], (service: UtilAPIService) => {
        expect(service).toBeTruthy();
    }));
});
