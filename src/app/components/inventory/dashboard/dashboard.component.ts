import { Component, OnInit } from '@angular/core';
import { MatDialog, PageEvent } from '@angular/material';

import { SharedService } from '../../../services/shared/shared.service';
import { InventoryAPIService, Inventory, InventorySearch, PageResultObj } from '../../../services/api/inventory/inventoryapi.service';
import { ReservationAPIService, Reservation, ReservationSearch,} from '../../../services/api/reservation/reservationapi.service';
import { ArrayDatabase, ArrayDataSource, PropertySort } from '../../../util/arraydatabase';

@Component({
    selector: 'inventory-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class InventoryDashboardComponent implements OnInit {

    public resInProgress: boolean;
    public resCurrentPage: PageResultObj<Array<Reservation>>;
    public resSearchParams: ReservationSearch;

    public itemInProgress: boolean;
    public itemCurrentPage: PageResultObj<Array<Inventory>>;
    public itemSearchParams: InventorySearch;



    public items;

    public reservationDatabase: ArrayDatabase<Reservation>;
    public reservationDataSource: ArrayDataSource<Reservation>;

    public inventoryDatabase: ArrayDatabase<Inventory>;
    public inventoryDataSource: ArrayDataSource<Inventory>;


    public displayedColumns = ['UserName', 'BookingPurpose', 'BookingStart', 'BookingEnd', 'Location'];

    public idisplayedColumns = ['Name', 'Description', 'Expiration', 'Maintenance', 'Location'];
    

    constructor(private shared: SharedService, private inventoryAPI: InventoryAPIService, public reservationAPI: ReservationAPIService) {
        this.shared.setTitle("Inventory Dashboard");

        this.resCurrentPage = new PageResultObj<Array<Reservation>>();
        this.reservationDatabase = new ArrayDatabase<Reservation>();
        this.resSearchParams = new ReservationSearch();
        this.reservationDataSource = new ArrayDataSource(this.reservationDatabase);

        this.itemCurrentPage = new PageResultObj<Array<Inventory>>();
        this.itemSearchParams = new InventorySearch();
        this.inventoryDatabase = new ArrayDatabase<Inventory>();
        this.inventoryDataSource = new ArrayDataSource(this.inventoryDatabase);

    }

    ngOnInit() {

    }

    public authReady() {
        this.searchReservation();
        this.itemSearch();
    }

    public searchReservation() {
        if (!this.resInProgress) {
            this.resInProgress = true;
            this.reservationAPI.searchReservation(this.resSearchParams).subscribe(result => {
                if (result.Success) {
                    this.resCurrentPage = result;
                    this.reservationDatabase.setDB(result.ReturnObj);
                }
                this.resInProgress = false;
            });
        }
    }

    public itemSearch() {
        if (!this.itemInProgress) {
            this.itemInProgress = true;
            this.inventoryAPI.searchInventory(this.itemSearchParams).subscribe(result => {
                if (result.Success) {
                    this.itemCurrentPage = result;
                    this.inventoryDatabase.setDB(result.ReturnObj);
                }
                this.itemInProgress = false;
            });
        }
    }

}
