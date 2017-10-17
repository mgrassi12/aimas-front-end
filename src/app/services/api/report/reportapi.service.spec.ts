import { TestBed, inject } from '@angular/core/testing';
import { APIImports, APIProviders } from '../../../../test.global';

import { ReportAPIService } from './reportapi.service';

describe('ReportapiService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                APIImports
            ],
            providers: [
                APIProviders,
                ReportAPIService
            ]
        });
    });

    it('should be created', inject([ReportAPIService], (service: ReportAPIService) => {
        expect(service).toBeTruthy();
    }));
});
