import { Component, OnInit } from '@angular/core';
import { MatDialog, PageEvent } from '@angular/material';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { SharedService } from '../../../services/shared/shared.service';

import { ReportAPIService } from '../../../services/api/report/reportapi.service';
import { ReportSearchDialogComponent } from '../searchdialog/searchdialog.component'

@Component({
    selector: 'app-management',
    templateUrl: './management.component.html',
    styleUrls: ['./management.component.css']
})
export class ReportManagementComponent implements OnInit {

    public inProgress: boolean;

    public quickSearchVal: string;


    constructor(private shared: SharedService, private dialog: MatDialog) {
        this.shared.setTitle("Report Management");
    }

    ngOnInit() {
    }

}
