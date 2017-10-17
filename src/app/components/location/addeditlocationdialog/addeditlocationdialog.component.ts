import { Component, OnInit } from '@angular/core';
import { MatDialog, PageEvent } from '@angular/material';

import { LocationAPIService, Location } from '../../../services/api/location/locationapi.service';
@Component({
    selector: 'app-addeditlocationdialog',
    templateUrl: './addeditlocationdialog.component.html',
    styleUrls: ['./addeditlocationdialog.component.css']
})
export class AddEditLocationDialogComponent implements OnInit {

    public location: Location;
    public title: string;
    public btnText: string;


    constructor() { }

    ngOnInit() {
    }

    public setText(title: string, btn: string) {
        this.title = title;
        this.btnText = btn;
    }

}
