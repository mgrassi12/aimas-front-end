import { Component, OnInit } from '@angular/core';
import { MatDialog, PageEvent } from '@angular/material';

import { ArrayDatabase, ArrayDataSource, PropertySort } from '../../../util/arraydatabase';
import { SharedService } from '../../../services/shared/shared.service';
import { InventoryAPIService, Inventory, InventorySearch, PageResultObj } from '../../../services/api/inventory/inventoryapi.service';
import { InventorySearchDialogComponent } from '../searchdialog/searchdialog.component';
import { InventoryAddEditDialogComponent } from '../addeditdialog/addeditdialog.component';
import { ConfirmationDialogueComponent } from '../../../util/confirmationdialogue/confirmationdialogue.component';
import { ReservationAddEditDialogComponent } from '../../reservation/addeditdialog/addeditdialog.component';
import { ReservationAPIService, Reservation } from '../../../services/api/reservation/reservationapi.service';
import { AddEditReportComponent } from "../../reports/addeditreport/addeditreport.component";
import { Report, ReportType } from "../../../models/report";
import { ReportAPIService } from "../../../services/api/report/reportapi.service";


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

    public displayedColumns = ['Name', 'Description', 'Expiration', 'Maintenance', 'Location', 'Reserve', 'Actions'];

    public inventoryDatabase: ArrayDatabase<Inventory>;
    public inventoryDataSource: ArrayDataSource<Inventory>;

    public selectedInventory: Array<Inventory>;


    constructor(
        private shared: SharedService,
        private inventoryAPI: InventoryAPIService,
        private reservationAPI: ReservationAPIService,
        private reportAPI: ReportAPIService,
        private dialog: MatDialog
    ) {
        this.shared.setTitle("Inventory Management");

        this.currentPage = new PageResultObj<Array<Inventory>>();
        this.searchParams = new InventorySearch();
        this.inventoryDatabase = new ArrayDatabase<Inventory>();
        this.inventoryDataSource = new ArrayDataSource(this.inventoryDatabase);
        this.selectedInventory = [];
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
        instance.setText("Add Item", "Submit");

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
        instance.setText("Edit Item", "Submit");

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


    public isSelected(id: number) {
        return this.selectedInventory.find(x => x.ID == id) != null;
    }

    public reserve(id: number, state: boolean) {
        var item = this.inventoryDatabase.data.find(x => x.ID == id);
        if (state && !this.selectedInventory.includes(item)) {
            this.selectedInventory.push(item);
        }
        else if (this.selectedInventory.includes(item)) {
            this.selectedInventory.splice(this.selectedInventory.indexOf(item));
        }
    }

    public newReservation() {
        var ref = this.dialog.open(ReservationAddEditDialogComponent);
        var instance = ref.componentInstance;

        instance.reservation = new Reservation();
        instance.reservation.Inventories = this.selectedInventory;
        instance.setText("Add Reservation", "Submit");

        ref.afterClosed()
            .map(res => JSON.parse(res || false) as boolean)
            .subscribe(res => {
                if (res) {
                    this.reservationAPI.addReservation(instance.reservation)
                        .subscribe(res => {
                            if (res.Success) {
                                this.shared.notification("Reservation was Successful");
                            }
                        });
                    this.selectedInventory = [];
                }
            });
    }

    public reportInventory(inventory: Inventory, reportType: ReportType, title: string) {
        var ref = this.dialog.open(AddEditReportComponent);
        var instance = ref.componentInstance;

        instance.report = new Report();
        instance.report.Type = reportType;
        instance.report.Inventory = new Inventory(inventory.ID);

        instance.setText(title, "Submit");

        ref.afterClosed()
            .map(res => JSON.parse(res || false) as boolean)
            .subscribe(res => {
                if (res) {
                    this.reportAPI.addReport(instance.report)
                        .subscribe(res => {
                            if (res.Success) {
                                this.search();
                                this.shared.notification("Report Successfully Sent");
                            }
                            else {
                                this.shared.notification("Report Faild to Send");
                            }
                        });
                }
            });
    }

}
