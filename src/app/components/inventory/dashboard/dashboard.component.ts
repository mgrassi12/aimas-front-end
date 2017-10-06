import { Component, OnInit } from '@angular/core';
import { MdDialog, PageEvent } from '@angular/material';

import { SharedService } from '../../../services/shared/shared.service';
import { InventoryAPIService, Inventory } from '../../../services/api/inventory/inventoryapi.service';
import { AddEditUserDialogComponent } from '../../auth/addedituserdialog/addedituserdialog.component';

@Component({
    selector: 'inventory-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class InventoryDashboardComponent implements OnInit {
    

    public items;

    constructor(private shared: SharedService, private inventory: InventoryAPIService, public dialog: MdDialog) {
        this.shared.setTitle("Inventory Dashboard");
    }

    ngOnInit() {
        this.inventory.getAllInventories().subscribe(result => {
            this.items = result.ReturnObj;
        });
    }

    public addUser() {
        var ref = this.dialog.open(AddEditUserDialogComponent);
        var instance = ref.componentInstance;

        instance.setText("Add User", "Add");
    }

}
