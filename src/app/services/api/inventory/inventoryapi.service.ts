import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { SharedService } from '../../shared/shared.service';
import { Result, ResultObj, PageResultObj } from '../../../models/result';
import { Inventory, Location, InventorySearch } from '../../../models/inventory';

// Exports
export { Result, ResultObj, PageResultObj } from '../../../models/result';
export { Inventory, Location, InventorySearch } from '../../../models/inventory';

@Injectable()
export class InventoryAPIService {


    constructor(private http: HttpClient, private shared: SharedService) {

    }

    public getAllInventories() {
        return this.http.get(this.shared.API.Inventory.All)
            .map(res => ResultObj.ResultObjFromJson<Array<Inventory>>(res, Inventory, true));
    }

    public searchInventory(search: InventorySearch) {
        return this.http.post(this.shared.API.Inventory.Search, search)
            .map(res => PageResultObj.PageResultObjFromJson<Array<Inventory>>(res, Inventory, true));
    }

    public addInventory(inventory: Inventory) {
        return this.http.post(this.shared.API.Inventory.Add, inventory)
            .map(res => Result.ResultFromJson(res));
    }

    public updateInventory(inventory: Inventory) {
        return this.http.post(this.shared.API.Inventory.Update, inventory)
            .map(res => Result.ResultFromJson(res));
    }

    public removeInventory(id: number) {
        return this.http.get(this.formatURL(this.shared.API.Inventory.Remove, id))
            .map(res => Result.ResultFromJson(res));
    }


    private formatURL(url: string, item: string | number | boolean) {
        var reg = /{[A-Za-z1-9]*}/;
        return url.replace(reg, item.toString());
    }

}

// Include Catching errors
