import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { SharedService } from '../../shared/shared.service';
import { Result, ResultObj, PageResultObj } from '../../../models/result';
import { Reservation, ReservationSearch } from '../../../models/reservation';
import { Inventory } from "../inventory/inventoryapi.service";

// Exports
export { Reservation, ReservationSearch, Result, ResultObj, PageResultObj };

@Injectable()
export class ReservationAPIService {

    constructor(private http: HttpClient, private shared: SharedService) {

    }

    public searchReservation(search: ReservationSearch) {
        return this.http.post(this.shared.API.Reservation.Search, search)
            .map(res => PageResultObj.PageResultObjFromJson<Array<Reservation>>(res, Reservation, true));
    }

    public addReservation(reservation: Reservation) {
        reservation.Inventories = reservation.Inventories.map(item => new Inventory(item.ID));
        return this.http.post(this.shared.API.Reservation.Add, reservation)
            .map(res => Result.ResultFromJson(res));
    }

    public removeReservation(id: number) {
        return this.http.get(this.formatURL(this.shared.API.Reservation.Remove, id))
            .map(res => Result.ResultFromJson(res));
    }


    private formatURL(url: string, item: string | number | boolean) {
        var reg = /{[A-Za-z1-9]*}/;
        return url.replace(reg, item.toString());
    }
}
