import { TestBed, inject } from '@angular/core/testing';
import { APIImports } from '../../../../test.global';


import { SharedService } from '../../shared/shared.service';
import { InventoryAPIService } from './inventoryapi.service';

describe('InventoryapiService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                ...APIImports
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
