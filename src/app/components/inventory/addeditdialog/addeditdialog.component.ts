import { Component, OnInit } from '@angular/core';

import { DateFormat } from '../../../services/shared/shared.service';
import { InventoryAPIService } from '../../../services/api/inventory/inventoryapi.service';
import { Inventory } from '../../../models/inventory';
import { AlertTime } from '../../../models/alerttime';

@Component({
    selector: 'app-addeditdialog',
    templateUrl: './addeditdialog.component.html',
    styleUrls: ['./addeditdialog.component.css']
})
export class InventoryAddEditDialogComponent implements OnInit {

    public get DateFormat() { return DateFormat; }

    public inventory: Inventory;
    public title: string
    public btnText: string
    public expirationAlertTimes: Array<AlertTime>;
    public allAlertTimes: Array<AlertTime>;

    constructor(private inventoryAPI: InventoryAPIService) {
        this.expirationAlertTimes = [];
        this.allAlertTimes = [];
    }

    ngOnInit() {
    }

    public setText(title: string, btn: string) {
        this.title = title;
        this.btnText = btn;

        if (this.inventory.ID != null)
            this.inventoryAPI.getInventoryAlerts(this.inventory).subscribe(res => {
                this.expirationAlertTimes = res.ReturnObj;
            })
        this.inventoryAPI.getAlerts().subscribe(res => {
            this.allAlertTimes = res.ReturnObj;
        })
    }


    public get now() { return new Date(); }

    public addAlert(id) {
        if (id != null)
            this.expirationAlertTimes.push(this.allAlertTimes.find(x => x.ID == id));
    }

}
