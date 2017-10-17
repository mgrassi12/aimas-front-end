import { Component, OnInit } from '@angular/core';

import { LocationSearch } from '../../../models/models'

@Component({
    selector: 'app-searchlocationdialog',
    templateUrl: './searchlocationdialog.component.html',
    styleUrls: ['./searchlocationdialog.component.css']
})
export class SearchLocationDialogComponent implements OnInit {

    public search: LocationSearch;

    constructor() { }

    ngOnInit() {
    }

}
