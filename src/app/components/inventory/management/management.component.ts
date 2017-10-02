import { Component, OnInit } from '@angular/core';
import { MdDialog, PageEvent } from '@angular/material';

import { SharedService } from '../../../services/shared/shared.service';
import { InventoryAPIService, Inventory, Location, InventorySearch, PageResultObj } from '../../../services/api/inventory/inventoryapi.service';
import { ArrayDatabase, ArrayDataSource, PropertySort } from '../../../util/arraydatabase';

import { InventorySearchDialogComponent } from '../searchdialog/searchdialog.component';
import { InventoryAddEditDialogComponent } from '../addeditdialog/addeditdialog.component';

import { Moment, isMoment } from 'moment';

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

    public displayedColumns = ['ID', 'Name', 'Description', 'Expiration', 'Maintance', 'Location', 'Actions'];


    constructor(private shared: SharedService, private inventory: InventoryAPIService, public dialog: MdDialog) {
        this.shared.setTitle("Inventory Management");

        this.currentPage = new PageResultObj<Array<Inventory>>();
        this.searchParams = new InventorySearch();
        this.inventoryDatabase = new ArrayDatabase<Inventory>();
        this.inventoryDataSource = new ArrayDataSource(this.inventoryDatabase);
    }

    ngOnInit() {
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
            this.inventory.searchInventory(this.searchParams).subscribe(result => {
                if (result.Success) {
                    this.currentPage = result;
                    this.inventoryDatabase.setDB(result.ReturnObj);
                }
                this.inProgress = false;
            });
        }
    }

    public clearSearch() {
        this.searchParams.clear();
        this.search();
    }

    public showSearchOptionsDialog() {
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

    // Inventory

    public addInventory() {
        var ref = this.dialog.open(InventoryAddEditDialogComponent);
        var instance = ref.componentInstance;

        instance.setText("Add Inventory", "Add");
        instance.inventory = new Inventory();
        instance.inventory.Location.ID = 1;

        ref.afterClosed()
            .map(res => JSON.parse(res) as boolean)
            .subscribe(res => {
                if (res)
                    this.inventory.addInventory(instance.inventory)
                        .subscribe(res => {
                            if (res.Success)
                                alert("Success");
                        });
            });
    }

    public editInventory(inventory: Inventory) {
        var ref = this.dialog.open(InventoryAddEditDialogComponent);
        var instance = ref.componentInstance;

        instance.setText("Edit Inventory", "Edit");
        instance.inventory = inventory;

        ref.afterClosed()
            .map(res => JSON.parse(res) as boolean)
            .subscribe(res => {
                if (res)
                    this.inventory.updateInventory(instance.inventory)
                        .subscribe(res => {
                            if (res.Success)
                                alert("Success");
                        });
            });
    }

    public deleteInventory(inventory: Inventory) {
        this.inventory.removeInventory(inventory.ID).subscribe(res => {
            if (res.Success)
                alert("success");
        })
    }

}
