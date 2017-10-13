import { Component, OnInit } from '@angular/core';
import { MatDialog, PageEvent } from '@angular/material';

import { SharedService } from '../../../services/shared/shared.service';
import { ReservationAPIService, Reservation, Location, ReservationSearch, PageResultObj } from '../../../services/api/reservation/reservationapi.service';
import { ArrayDatabase, ArrayDataSource, PropertySort } from '../../../util/arraydatabase';

import { ReservationSearchDialogComponent } from '../searchdialog/searchdialog.component';
import { ReservationAddEditDialogComponent } from '../addeditdialog/addeditdialog.component';
import { ConfirmationDialogueComponent } from '../../../util/confirmationdialogue/confirmationdialogue.component';


@Component({
    selector: 'app-management',
    templateUrl: './management.component.html',
    styleUrls: ['./management.component.css']
})
export class ReservationManagementComponent implements OnInit {

    public inProgress: boolean;
    public currentPage: PageResultObj<Array<Reservation>>;
    public quickSearchVal: string;
    public searchParams: ReservationSearch;

    public reservationDatabase: ArrayDatabase<Reservation>;
    public reservationDataSource: ArrayDataSource<Reservation>;

    public displayedColumns = ['UserName', 'BookingPurpose', 'BookingStart', 'BookingEnd', 'Location', 'Actions'];


    constructor(private shared: SharedService, private reservationAPI: ReservationAPIService, private dialog: MatDialog) {
        this.shared.setTitle("Reservation Management");

        this.currentPage = new PageResultObj<Array<Reservation>>();
        this.searchParams = new ReservationSearch();
        this.reservationDatabase = new ArrayDatabase<Reservation>();
        this.reservationDataSource = new ArrayDataSource(this.reservationDatabase);
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
            this.reservationAPI.searchReservation(this.searchParams).subscribe(result => {
                if (result.Success) {
                    this.currentPage = result;
                    this.reservationDatabase.setDB(result.ReturnObj);
                }
                this.inProgress = false;
            });
        }
    }

    public quickSearch() {
        this.searchParams.clear()
        this.searchParams.UserName = this.quickSearchVal;
        this.search()
    }

    public clearSearch() {
        this.searchParams.clear();
        this.quickSearchVal = "";
        this.search();
    }

    public showSearchOptionsDialog() {
        //var ref = this.dialog.open(ReservationSearchDialogComponent);
        //var instance = ref.componentInstance;

        //instance.search = this.searchParams;

        //ref.afterClosed()
        //    .map(res => JSON.parse(res || false) as boolean)
        //    .subscribe(res => {
        //        if (res)
        //            this.search();
        //    });
    }

    // Inventory

    public addReservation() {
        //var ref = this.dialog.open(ReservationAddEditDialogComponent);
        //var instance = ref.componentInstance;

        //instance.inventory = new Inventory();
        //instance.inventory.CurrentLocation.ID = 1;
        //instance.setText("Add Inventory", "Add");

        //ref.afterClosed()
        //    .map(res => JSON.parse(res || false) as boolean)
        //    .subscribe(res => {
        //        if (res)
        //            this.inventory.addInventory(instance.inventory)
        //                .subscribe(res => {
        //                    if (res.Success) {
        //                        this.search();
        //                        this.shared.notification("Add was Successful");
        //                    }
        //                });
        //    });
    }

    public editReservation(reservation: Reservation) {
        //var ref = this.dialog.open(ReservationAddEditDialogComponent);
        //var instance = ref.componentInstance;

        //instance.inventory = inventory;
        //instance.setText("Edit Inventory", "Edit");

        //ref.afterClosed()
        //    .map(res => JSON.parse(res || false) as boolean)
        //    .subscribe(res => {
        //        if (res)
        //            this.inventory.updateInventory(instance.inventory)
        //                .subscribe(res => {
        //                    if (res.Success) {
        //                        this.search();
        //                        this.shared.notification("Edit was Successful");
        //                    }
        //                });
        //    });
    }

    public deleteReservation(reservation: Reservation) {
        //var ref = this.dialog.open(ConfirmationDialogueComponent);
        //var instance = ref.componentInstance;

        //instance.setAllText("Remove", "Are you sure?", "Remove", "Cancel");

        //ref.afterClosed()
        //    .map(res => JSON.parse(res || false) as boolean)
        //    .subscribe(res => {
        //        if (res)
        //            this.inventory.removeInventory(inventory.ID).subscribe(res => {
        //                if (res.Success) {
        //                    this.search();
        //                    this.shared.notification("Removal was Successful");
        //                }
        //            });
        //    });
    }

}

