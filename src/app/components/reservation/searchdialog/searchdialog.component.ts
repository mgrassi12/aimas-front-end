import { Component, OnInit } from '@angular/core';

import { ReservationSearch } from '../../../models/reservation';

@Component({
    selector: 'app-searchdialog',
    templateUrl: './searchdialog.component.html',
    styleUrls: ['./searchdialog.component.css']
})
export class ReservationSearchDialogComponent implements OnInit {

    public search: ReservationSearch;

    constructor() { }

    ngOnInit() {
    }

}
