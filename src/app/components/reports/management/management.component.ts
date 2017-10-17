import { Component, OnInit } from '@angular/core';
import { MatDialog, PageEvent } from '@angular/material';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { SharedService } from '../../../services/shared/shared.service';
import { ReportAPIService } from '../../../services/api/report/reportapi.service';
import { ArrayDatabase, ArrayDataSource, PropertySort } from '../../../util/arraydatabase';
import { Result, ResultObj, PageResultObj } from '../../../models/result';
import { Report, ReportSearch } from '../../../models/report';

import { ReportSearchDialogComponent } from '../searchdialog/searchdialog.component'

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

    public displayedColumns = ['ID', 'Type']

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
        this.searchParams.Name = this.quickSearchVal;
        this.search()
    }

    public clearSearch() {
        this.searchParams.clear();
        this.quickSearchVal = "";
        this.search();
    }

}
