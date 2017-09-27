import { TestBed, inject } from '@angular/core/testing';
import { MatSnackBarModule } from '@angular/material';

import { SharedService } from './shared.service';

describe('SharedService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                MatSnackBarModule
            ],
            providers: [
                SharedService
            ]
        });
    });

    it('should be created', inject([SharedService], (service: SharedService) => {
        expect(service).toBeTruthy();
    }));
});
