import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import 'rxjs/add/operator/map';

import { SharedService } from '../../shared/shared.service';
import { InventoryAPIService } from './inventoryapi.service';

describe('InventoryapiService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule
            ],
            providers: [
                SharedService,
                InventoryAPIService
            ]
        });
    });

    it('should be created', inject([InventoryAPIService], (service: InventoryAPIService) => {
        expect(service).toBeTruthy();
    }));
});

//http://blog.ninja-squad.com/2017/07/17/http-client-module/
