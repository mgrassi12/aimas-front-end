import { Component, OnInit } from '@angular/core';
import { MdDialog, PageEvent } from '@angular/material';

import { SharedService } from '../../services/shared/shared.service';
import { InventoryAPIService, Inventory, Location, InventorySearch, PageResultObj } from '../../services/api/inventory/inventoryapi.service';
import { ArrayDatabase, ArrayDataSource, PropertySort } from '../../util/arraydatabase';

import { InventorySearchDialogComponent } from '../searchdialog/searchdialog.component';
import { AddEditDialogComponent } from '../addeditdialog/addeditdialog.component';

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

    public displayedColumns = ['ID', 'Name', 'Description', 'Expiration', 'Maintance', 'Location', 'Edit'];

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
        this.inProgress = true;
        this.inventory.searchInventory(this.searchParams).subscribe(result => {
            if (result.Success) {
                this.currentPage = result;
                this.inventoryDatabase.setDB(result.ReturnObj);
            }
            this.inProgress = false;
        });
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
            .map(res => JSON.parse(res) as number)
            .subscribe(res => {
                if (res == 1) {
                    this.search();
                }
            });
    }

    // Inventory

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

    public editInventory(inventory: Inventory) {
        var ref = this.dialog.open(AddEditDialogComponent);
        var instance = ref.componentInstance;

        instance.setText("Edit Inventory", "Edit");
        instance.inventory = inventory;

        ref.afterClosed()
            .map(res => JSON.parse(res) as boolean)
            .subscribe(res => {
                if (res) {
                    this.inventory.updateInventory(instance.inventory)
                        .subscribe(res => {
                            alert("Success");
                        });
                }
            });
    }

    type(obj) {
        return isMoment(obj);
    }

}
