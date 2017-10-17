import { Component, OnInit } from '@angular/core';
import { MatDialog, PageEvent } from '@angular/material';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { SharedService } from '../../../services/shared/shared.service';
import { ReportAPIService } from '../../../services/api/report/reportapi.service';
import { ArrayDatabase, ArrayDataSource, PropertySort } from '../../../util/arraydatabase';
import { Result, ResultObj, PageResultObj } from '../../../models/result';
import { Report, ReportSearch } from '../../../models/report';

import { ReportSearchDialogComponent } from '../searchdialog/searchdialog.component';
import { ConfirmationDialogueComponent } from '../../../util/confirmationdialogue/confirmationdialogue.component';

@Component({
    selector: 'app-management',
    templateUrl: './management.component.html',
    styleUrls: ['./management.component.css']
})
export class ReportManagementComponent implements OnInit {

    public inProgress: boolean;
    public currentPage: PageResultObj<Array<Report>>;
    public quickSearchVal: string;
    public searchParams: ReportSearch;

    public displayedColumns = ['Type', 'Creator', 'Executor', 'ExecutionDate', 'Inventory', 'Notes', 'Actions']

    public reportDatabase: ArrayDatabase<Report>;
    public reportDataSource: ArrayDataSource<Report>;


    constructor(private shared: SharedService, private reportAPI: ReportAPIService, private dialog: MatDialog) {
        this.shared.setTitle("Report Management");

        this.currentPage = new PageResultObj<Array<Report>>();
        this.searchParams = new ReportSearch();
        this.reportDatabase = new ArrayDatabase<Report>();
        this.reportDataSource = new ArrayDataSource(this.reportDatabase);
    }

    ngOnInit() {
    }

    public authReady() {
        this.search();
    }

    // Search
    public search() {
        if (!this.inProgress) {
            this.inProgress = true;
            this.reportAPI.searchReports(this.searchParams).subscribe(result => {
                if (result.Success) {
                    this.currentPage = result;
                    this.reportDatabase.setDB(result.ReturnObj);
                }
                this.inProgress = false;
            });
        }
    }

    public quickSearch() {
        this.searchParams.clear()
        this.searchParams.InventoryName = this.quickSearchVal;
        this.search()
    }

    public clearSearch() {
        this.searchParams.clear();
        this.quickSearchVal = "";
        this.search();
    }

    public showSearchOptionsDialog() {
        var ref = this.dialog.open(ReportSearchDialogComponent);
        var instance = ref.componentInstance;

        instance.search = this.searchParams;

        ref.afterClosed()
            .map(res => JSON.parse(res || false) as boolean)
            .subscribe(res => {
                if (res)
                    this.search();
            });
    }

    public updatePage(page: PageEvent) {

        if (this.searchParams.PageSize != page.pageSize) {
            this.searchParams.PageSize = page.pageSize;
            this.searchParams.PageIndex = 0;
        }
        else {
            this.searchParams.PageIndex = page.pageIndex;
        }
        this.search();
    }

    //Reports
    public deleteReport(report: Report) {
        var ref = this.dialog.open(ConfirmationDialogueComponent);
        var instance = ref.componentInstance;

        instance.setAllText("Remove", "Are you sure?", "Remove", "Cancel");

        ref.afterClosed()
            .map(res => JSON.parse(res || false) as boolean)
            .subscribe(res => {
                if (res)
                    this.reportAPI.removeReport(report.ID).subscribe(res => {
                        if (res.Success) {
                            this.search();
                            this.shared.notification("Removal was Successful");
                        }
                    });
            });
    }

}
