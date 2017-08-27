import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { SharedService } from '../../shared/shared.service';
import { Result, ResultObj } from '../../../models/result';
import { Inventory } from '../../../models/Inventory';

@Injectable()
export class InventoryAPIService {


    constructor(private http: HttpClient, private shared: SharedService) {

    }

    public getInventories() {
        return this.http.get(this.shared.API.Inventory.All)
            .map(res => ResultObj.ResultObjFromJson<Array<Inventory>>(Inventory, res, true));

    }

}
