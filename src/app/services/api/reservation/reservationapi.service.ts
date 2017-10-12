import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { SharedService } from '../../shared/shared.service';
import { Result, ResultObj, PageResultObj } from '../../../models/result';
import { Reservation, ReservationSearch } from '../../../models/reservation';
import { Location } from '../../../models/models';

// Exports
export { Reservation, Location, ReservationSearch, Result, ResultObj, PageResultObj };

@Injectable()
export class ReservationAPIService {

    constructor(private http: HttpClient, private shared: SharedService) {

    }

    public searchReservation(search: ReservationSearch) {
        return this.http.post(this.shared.API.Reservation.Search, search)
            .map(res => PageResultObj.PageResultObjFromJson<Array<Reservation>>(res, Reservation, true));
    }

}
