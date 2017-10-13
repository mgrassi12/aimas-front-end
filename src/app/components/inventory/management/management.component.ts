import { Component, OnInit } from '@angular/core';
import { MatDialog, PageEvent } from '@angular/material';

import { SharedService } from '../../../services/shared/shared.service';
import { InventoryAPIService, Inventory, Location, InventorySearch, PageResultObj } from '../../../services/api/inventory/inventoryapi.service';
import { ArrayDatabase, ArrayDataSource, PropertySort } from '../../../util/arraydatabase';

import { InventorySearchDialogComponent } from '../searchdialog/searchdialog.component';
import { InventoryAddEditDialogComponent } from '../addeditdialog/addeditdialog.component';
import { ConfirmationDialogueComponent } from '../../../util/confirmationdialogue/confirmationdialogue.component';


@Component({
    selector: 'app-management',
    templateUrl: './management.component.html',
    styleUrls: ['./management.component.css']
})
export class InventoryManagementComponent implements OnInit {

    public inProgress: boolean;
    public currentPage: PageResultObj<Array<Inventory>>;
    public quickSearchVal: string;
    public searchParams: InventorySearch;

    public inventoryDatabase: ArrayDatabase<Inventory>;
    public inventoryDataSource: ArrayDataSource<Inventory>;

    public displayedColumns = ['Name', 'Description', 'Expiration', 'Maintenance', 'Location', 'Actions'];


    constructor(private shared: SharedService, private inventoryAPI: InventoryAPIService, private dialog: MatDialog) {
        this.shared.setTitle("Inventory Management");

        this.currentPage = new PageResultObj<Array<Inventory>>();
        this.searchParams = new InventorySearch();
        this.inventoryDatabase = new ArrayDatabase<Inventory>();
        this.inventoryDataSource = new ArrayDataSource(this.inventoryDatabase);
    }

    ngOnInit() {

    }

    public authReady() {
        this.search();
    }


    // Page Change

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

    // Search

    public search() {
        if (!this.inProgress) {
            this.inProgress = true;
            this.inventoryAPI.searchInventory(this.searchParams).subscribe(result => {
                if (result.Success) {
                    this.currentPage = result;
                    this.inventoryDatabase.setDB(result.ReturnObj);
                }
                this.inProgress = false;
            });
        }
    }

    public quickSearch() {
        this.searchParams.clear()
        this.searchParams.Name = this.quickSearchVal;
        this.search()
    }

    public clearSearch() {
        this.searchParams.clear();
        this.quickSearchVal = "";
        this.search();
    }

    public showSearchOptionsDialog() {
        var ref = this.dialog.open(InventorySearchDialogComponent);
        var instance = ref.componentInstance;

        instance.search = this.searchParams;

        ref.afterClosed()
            .map(res => JSON.parse(res || false) as boolean)
            .subscribe(res => {
                if (res)
                    this.search();
            });
    }

    // Inventory

    public addInventory() {
        var ref = this.dialog.open(InventoryAddEditDialogComponent);
        var instance = ref.componentInstance;

        instance.inventory = new Inventory();
        //instance.inventory.CurrentLocation.ID = 1;
        instance.setText("Add Inventory", "Add");

        ref.afterClosed()
            .map(res => JSON.parse(res || false) as boolean)
            .subscribe(res => {
                if (res)
                    this.inventoryAPI.addInventory(instance.inventory)
                        .subscribe(res => {
                            if (res.Success) {
                                this.search();
                                this.shared.notification("Add was Successful");
                            }
                        });
            });
    }

    public editInventory(inventory: Inventory) {
        var ref = this.dialog.open(InventoryAddEditDialogComponent);
        var instance = ref.componentInstance;

        instance.inventory = inventory;
        instance.setText("Edit Inventory", "Edit");

        ref.afterClosed()
            .map(res => JSON.parse(res || false) as boolean)
            .subscribe(res => {
                if (res)
                    this.inventoryAPI.updateInventory(instance.inventory)
                        .subscribe(res => {
                            if (res.Success) {
                                this.search();
                                this.shared.notification("Edit was Successful");
                            }
                        });
            });
    }

    public deleteInventory(inventory: Inventory) {
        var ref = this.dialog.open(ConfirmationDialogueComponent);
        var instance = ref.componentInstance;

        instance.setAllText("Remove", "Are you sure?", "Remove", "Cancel");

        ref.afterClosed()
            .map(res => JSON.parse(res || false) as boolean)
            .subscribe(res => {
                if (res)
                    this.inventoryAPI.removeInventory(inventory.ID).subscribe(res => {
                        if (res.Success) {
                            this.search();
                            this.shared.notification("Removal was Successful");
                        }
                    });
            });
    }

}
