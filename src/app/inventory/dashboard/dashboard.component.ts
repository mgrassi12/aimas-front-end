import { Component, OnInit } from '@angular/core';

import { InventoryAPIService } from '../../services/api/inventory/inventoryapi.service';

@Component({
    selector: 'inventory-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class InventoryDashboardComponent implements OnInit {

    public items;

    constructor(private inventoryAPI: InventoryAPIService) {

    }

    ngOnInit() {
        this.inventoryAPI.getInventories().subscribe(result => {
            this.items = result.ReturnObj;
        });
    }

}
