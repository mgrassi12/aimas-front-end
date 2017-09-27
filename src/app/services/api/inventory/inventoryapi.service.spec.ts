import { TestBed, inject } from '@angular/core/testing';
import { APIImports, HttpTestingController, ResultObj, PageResultObj, InventorySearch, Inventory, ExpectedInventoryTestData } from '../../../../test.global';


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

    it('should get all inventory items', inject([InventoryAPIService, HttpTestingController], (service: InventoryAPIService, http: HttpTestingController) => {

        let expected = ExpectedInventoryTestData;
        let result: Array<Inventory>;

        service.getAllInventories()
            .subscribe(res => {
                result = res.ReturnObj
            });

        let httpResponse = new ResultObj<Array<Inventory>>();
        httpResponse.Success = true;
        httpResponse.ReturnObj = ExpectedInventoryTestData;
        http.expectOne('/api/inventory/all').flush(httpResponse);

        expect(result).toEqual(expected);
    }));

    it('should get all inventory items via search', inject([InventoryAPIService, HttpTestingController], (service: InventoryAPIService, http: HttpTestingController) => {

        let expected = ExpectedInventoryTestData;
        let result: Array<Inventory>;

        let search = new InventorySearch();
        service.searchInventory(search)
            .subscribe(res => {
                result = res.ReturnObj
            });

        let httpResponse = new PageResultObj<Array<Inventory>>();
        httpResponse.Success = true;
        httpResponse.ReturnObj = expected;
        http.expectOne('/api/inventory/search').flush(httpResponse);

        expect(result).toEqual(expected);
    }));

    it('should get id 2 of inventory items via search', inject([InventoryAPIService, HttpTestingController], (service: InventoryAPIService, http: HttpTestingController) => {

        // Define Expectes and Actural result
        let expected: Array<Inventory> = ExpectedInventoryTestData.filter(item => item.ID == 2);
        let result: Array<Inventory>;

        // Define the search Paramaters
        let search = new InventorySearch();
        search.ID = 2;
        // Call the API Service with the search params
        service.searchInventory(search)
            .subscribe(res => {
                result = res.ReturnObj
            });

        // Get the HTTP reqquest
        let req = http.expectOne('/api/inventory/search')
        // Get the HTTP body params
        let params = req.request.body as InventorySearch;
        // Define the HTTP response 
        let httpResponse = new PageResultObj<Array<Inventory>>();
        // Mock the Response
        httpResponse.Success = true;
        // Set the returned object, using the given search params from the body to mock the search
        httpResponse.ReturnObj = ExpectedInventoryTestData.filter(item => item.ID == params.ID);
        // Return the search results mock
        req.flush(httpResponse);

        // Expect the result to be the same as what was expected
        expect(result).toEqual(expected);
    }));
});

//http://blog.ninja-squad.com/2017/07/17/http-client-module/
