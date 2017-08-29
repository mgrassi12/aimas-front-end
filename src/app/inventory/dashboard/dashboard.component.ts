import { Component, OnInit } from '@angular/core';

import { InventoryAPIService, Inventory } from '../../services/api/inventory/inventoryapi.service';

@Component({
    selector: 'inventory-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class InventoryDashboardComponent implements OnInit {

    public items;

    constructor(private inventory: InventoryAPIService) {

    }

    ngOnInit() {
        this.inventory.getAllInventories().subscribe(result => {
            this.items = result.ReturnObj;
        });
    }

}
