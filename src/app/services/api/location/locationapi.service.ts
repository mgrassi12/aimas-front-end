import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { SharedService } from '../../shared/shared.service';
import { Result, ResultObj, PageResultObj } from '../../../models/result';
import { Location, LocationSearch} from '../../../models/models';

// Exports
export { Location, LocationSearch, Result, ResultObj, PageResultObj };

@Injectable()
export class LocationAPIService {


    constructor(private http: HttpClient, private shared: SharedService) {

    }

    public searchLocation(search: LocationSearch) {
        return this.http.post(this.shared.API.Location.Search, search)
            .map(res => PageResultObj.PageResultObjFromJson<Array<Location>>(res, Location, true));
    }

    public addLocation(location: Location) {
        return this.http.post(this.shared.API.Location.Add, location)
            .map(res => Result.ResultFromJson(res));
    }

    public updateLocation(location: Location) {
        return this.http.post(this.shared.API.Location.Update, location)
            .map(res => Result.ResultFromJson(res));
    }

    public removeLocation(id: number) {
        return this.http.get(this.formatURL(this.shared.API.Location.Remove, id))
            .map(res => Result.ResultFromJson(res));
    }

    private formatURL(url: string, item: string | number | boolean) {
        var reg = /{[A-Za-z1-9]*}/;
        return url.replace(reg, item.toString());
    }

}

// Include Catching errors
