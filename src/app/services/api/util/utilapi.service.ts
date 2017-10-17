import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { SharedService } from '../../shared/shared.service';
import { Result, ResultObj, PageResultObj } from '../../../models/result';
import { Location } from '../../../models/models';

export { Location, Result, ResultObj, PageResultObj };


@Injectable()
export class UtilAPIService {

    constructor(private http: HttpClient, private shared: SharedService) {

    }


    public getLocations() {
        return this.http.get(this.shared.API.Util.Locations)
            .map(res => ResultObj.ResultObjFromJson<Array<Location>>(res, Location, true));
    }

}
