import { Component, OnInit, ViewChild } from '@angular/core';

import { ArrayDatabase, ArrayDataSource, PropertySort, Page } from '../../util/arraydatabase';
import { Inventory } from '../../models/inventory';
import { InventoryAPIService } from '../../services/api/inventory/inventoryapi.service';
import { MdTable, MdPaginator, PageEvent } from "@angular/material";

@Component({
    selector: 'app-management',
    templateUrl: './management.component.html',
    styleUrls: ['./management.component.css']
})
export class InventoryManagementComponent implements OnInit {

    public inventoryDatabase: ArrayDatabase<Inventory>;
    public inventoryDataSource: ArrayDataSource<Inventory>;

    //@ViewChild(MdTable) table: MdTable<Inventory>;
    public displayedColumns = ['ID', 'Name', 'Description', 'Expiration', 'Maintance', 'Location'];
    @ViewChild(MdPaginator) paginator: MdPaginator;

    constructor(private inventory: InventoryAPIService) {
        this.inventoryDatabase = new ArrayDatabase<Inventory>();
        this.inventoryDataSource = new ArrayDataSource(this.inventoryDatabase);
    }

    ngOnInit() {
        this.paginator.page.subscribe((page) => this.updatePage(page));

        this.inventory.getInventories().subscribe(result => {
            this.inventoryDatabase.addItems(result.ReturnObj);
        });
    }

    private updatePage(page: PageEvent) {
    }

}
