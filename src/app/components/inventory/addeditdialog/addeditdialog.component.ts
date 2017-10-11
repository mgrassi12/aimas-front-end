import { Component, OnInit } from '@angular/core';
import { MatChipInputEvent } from "@angular/material";

import { DateFormat } from '../../../services/shared/shared.service';
import { InventoryAPIService } from '../../../services/api/inventory/inventoryapi.service';
import { Inventory, InventoryAlertTimeModel, AlertInventoryTimeType, Location } from '../../../models/inventory';

@Component({
    selector: 'app-addeditdialog',
    templateUrl: './addeditdialog.component.html',
    styleUrls: ['./addeditdialog.component.css']
})
export class InventoryAddEditDialogComponent implements OnInit {

    public get DateFormat() { return DateFormat; }
    public get now() { return new Date(); }

    public options: Array<Option>;
    public expirationFactorVal: number;
    public maintenanceFactorVal: number;
    public expirationPeriodVal: number;
    public maintenancePeriodVal: number;

    public title: string
    public btnText: string
    public inventory: Inventory;
    public get ExpirationAlerts() {
        return this.inventory.AlertTimeInventories
            .filter(item => item.Type == AlertInventoryTimeType.Inventory_E_Date)
            .sort(this.sortAlerts);
    }
    public get maintenanceAlerts() {
        return this.inventory.AlertTimeInventories
            .filter(item => item.Type == AlertInventoryTimeType.Inventory_M_Date)
            .sort(this.sortAlerts);
    }
    public locations: Array<Location>;

    constructor(private inventoryAPI: InventoryAPIService) {
        this.options = [
            { factor: 1, name: "Days" },
            { factor: 7, name: "Weeks" },
            { factor: 30, name: "Months " },
            { factor: 365, name: "Years " }
        ];
        this.expirationFactorVal = this.options[0].factor;
        this.maintenanceFactorVal = this.options[0].factor;
        this.inventoryAPI.getLocations().subscribe(res => {
            if (res.Success)
                this.locations = res.ReturnObj;
        })
    }

    ngOnInit() {
    }

    public setText(title: string, btn: string) {
        this.title = title;
        this.btnText = btn;
    }

    public addAlert(period: string, factor: string, maintenance: boolean = false) {
        let days = parseInt(period) * parseInt(factor);
        if (!isNaN(days)) {
            let alert = new InventoryAlertTimeModel();
            alert.Type = maintenance ? AlertInventoryTimeType.Inventory_M_Date : AlertInventoryTimeType.Inventory_E_Date;
            alert.DaysBefore = days;
            this.inventory.AlertTimeInventories.push(alert);
        }
        if (maintenance)
            this.maintenancePeriodVal = null;
        else
            this.expirationPeriodVal = null;
    }

    public removeAlert(item: InventoryAlertTimeModel) {
        this.inventory.AlertTimeInventories.splice(this.inventory.AlertTimeInventories.indexOf(item), 1);
    }

    public decodeDays(days: number) {
        var option: Option;
        this.options.forEach(item => {
            if (days % item.factor == 0)
                option = item;
        })
        var num = days / option.factor;
        return `${num} ${option.name}`;
    }

    private sortAlerts(a: InventoryAlertTimeModel, b: InventoryAlertTimeModel) {
        if (a.DaysBefore < b.DaysBefore)
            return -1;
        else if (a.DaysBefore == b.DaysBefore)
            return 0;
        else
            return 1;
    }

}


interface Option {
    factor: number;
    name: string;
}
