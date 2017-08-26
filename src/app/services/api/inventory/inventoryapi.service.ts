import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';

import { SharedService } from '../../shared/shared.service';
import { Result, ResultObj } from '../../../models/Result';
import { Inventory } from '../../../models/Inventory';

@Injectable()
export class InventoryAPIService {


    constructor(private http: HttpClient, private shared: SharedService) {

    }

    public getInventories() {
        return this.http.get(this.shared.API.Inventory.All)
            .map(res => ResultObj.FromJson<Array<Inventory>>(Inventory, res, true));

    }

}
