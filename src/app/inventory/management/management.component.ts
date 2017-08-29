import { Component, OnInit } from '@angular/core';
import { MdDialog, PageEvent } from '@angular/material';

import { ArrayDatabase, ArrayDataSource, PropertySort } from '../../util/arraydatabase';
import { InventoryAPIService, Inventory, Location, InventorySearch, PageResultObj } from '../../services/api/inventory/inventoryapi.service';
import { InventorySearchDialogComponent } from '../searchdialog/searchdialog.component';
import { AddEditDialogComponent } from '../addeditdialog/addeditdialog.component';

@Component({
    selector: 'app-management',
    templateUrl: './management.component.html',
    styleUrls: ['./management.component.css']
})
export class InventoryManagementComponent implements OnInit {

    public inProgress: boolean;
    public currentPage: PageResultObj<Array<Inventory>>;
    public searchParams: InventorySearch;

    public inventoryDatabase: ArrayDatabase<Inventory>;
    public inventoryDataSource: ArrayDataSource<Inventory>;

    public displayedColumns = ['ID', 'Name', 'Description', 'Expiration', 'Maintance', 'Location'];

    constructor(private inventory: InventoryAPIService, public dialog: MdDialog) {
        this.currentPage = new PageResultObj<Array<Inventory>>();
        this.searchParams = new InventorySearch();
        this.inventoryDatabase = new ArrayDatabase<Inventory>();
        this.inventoryDataSource = new ArrayDataSource(this.inventoryDatabase);
    }

    ngOnInit() {
        //this.searchParams.ID = 0;
        this.search();
    }

    public updatePage(page: PageEvent) {

        if (this.searchParams.PageSize != page.pageSize) {
            this.searchParams.PageSize = page.pageSize;
            this.searchParams.PageIndex = 0;
        }
        else {
            this.searchParams.PageIndex = page.pageIndex;
        }
        this.search();
    }

    public search() {
        this.inProgress = true;
        this.inventory.searchInventory(this.searchParams).subscribe(result => {
            if (result.Success) {
                this.currentPage = result;
                this.inventoryDatabase.setDB(result.ReturnObj);
            }
            this.inProgress = false;
        });
    }

    public showSearchOptions() {
        var ref = this.dialog.open(InventorySearchDialogComponent);
        var instance = ref.componentInstance;

        instance.search = this.searchParams;

        ref.afterClosed()
            .map(res => JSON.parse(res) as boolean)
            .subscribe(res => {
                if (res)
                    this.search();
            });
    }

    public addInventory() {
        var ref = this.dialog.open(AddEditDialogComponent);
        var instance = ref.componentInstance;

        instance.setText("Add Inventory", "Add");
        instance.inventory = new Inventory();
        instance.inventory.Location.ID = 1;

        ref.afterClosed()
            .map(res => JSON.parse(res) as boolean)
            .subscribe(res => {
                if (res) {
                    this.inventory.addInventory(instance.inventory)
                        .subscribe(res => {

                        });
                }
            });
    }

}
