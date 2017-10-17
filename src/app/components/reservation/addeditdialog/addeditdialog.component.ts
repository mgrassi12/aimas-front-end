import { Component, OnInit } from '@angular/core';

import { Reservation } from '../../../models/reservation';
import { UtilAPIService } from "../../../services/api/util/utilapi.service";
import { Location } from '../../../models/models';

@Component({
    selector: 'app-addeditdialog',
    templateUrl: './addeditdialog.component.html',
    styleUrls: ['./addeditdialog.component.css']
})
export class ReservationAddEditDialogComponent implements OnInit {

    btnText: string;
    title: string;
    public get now() {
        return new Date();
    }

    public reservation: Reservation;

    public locations: Array<Location>;

    constructor(private utilAPI: UtilAPIService) {
        this.utilAPI.getLocations().subscribe(res => {
            if (res.Success)
                this.locations = res.ReturnObj;
        });
    }

    ngOnInit() {

    }

    public setText(title: string, btn: string) {
        this.title = title;
        this.btnText = btn;
    }

    public removeInventory(index: number) {
        this.reservation.Inventories.splice(index, 1);
    }
}
