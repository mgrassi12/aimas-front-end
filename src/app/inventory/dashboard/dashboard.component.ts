import { Component, OnInit } from '@angular/core';

import { SharedService } from '../../services/shared/shared.service';
import { InventoryAPIService, Inventory } from '../../services/api/inventory/inventoryapi.service';

@Component({
    selector: 'inventory-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class InventoryDashboardComponent implements OnInit {

    public items;

    constructor(private shared: SharedService, private inventory: InventoryAPIService) {
        this.shared.setTitle("Inventory Dashboard");
    }

    ngOnInit() {
        this.inventory.getAllInventories().subscribe(result => {
            this.items = result.ReturnObj;
        });
    }

}
