import { Component, OnInit } from '@angular/core';

import { SharedService } from '../../../services/shared/shared.service';
import { ReservationAPIService, Reservation, ReservationSearch, PageResultObj } from '../../../services/api/reservation/reservationapi.service';
import { ArrayDatabase, ArrayDataSource, PropertySort } from '../../../util/arraydatabase';

@Component({
    selector: 'app-detailsdialog',
    templateUrl: './detailsdialog.component.html',
    styleUrls: ['./detailsdialog.component.css']
})
export class DetailsDialogComponent implements OnInit {

    public title: string;
    public btnText: string;
    public body: string;

    constructor() { }

    ngOnInit() {
    }

    public setText(title: string, btn: string, body: string) {
        this.title = title;
        this.btnText = btn;
        this.body = body;
    }


}
