import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { SharedService } from '../../shared/shared.service';
import { Result, ResultObj, PageResultObj } from '../../../models/result';
import { Report, ReportSearch } from '../../../models/report';

// Exports
export { Report, ReportSearch, Result, ResultObj, PageResultObj };

@Injectable()
export class ReportAPIService {

    constructor(private http: HttpClient, private shared: SharedService) {

    }

    public getAllReports() {
        return this.http.get(this.shared.API.Report.All)
            .map(res => ResultObj.ResultObjFromJson<Array<Report>>(res, Report, true));
    }

    public searchReports(search: ReportSearch) {
        return this.http.post(this.shared.API.Report.All, search)
            .map(res => PageResultObj.PageResultObjFromJson<Array<Report>>(res, Report, true));
    }

    public addReport(report: Report) {
        return this.http.post(this.shared.API.Report.Add, report)
            .map(res => Result.ResultFromJson(res));
    }

    public removeReport(id: number) {
        return this.http.get(this.formatURL(this.shared.API.Report.Remove, id))
            .map(res => ResultObj.ResultFromJson(res));
    }

    private formatURL(url: string, item: string | number | boolean) {
        var reg = /{[A-Za-z1-9]*}/;
        return url.replace(reg, item.toString());
    }

}
