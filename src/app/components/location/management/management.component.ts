import { Component, OnInit } from '@angular/core';
import { MatDialog, PageEvent } from '@angular/material';

import { ArrayDatabase, ArrayDataSource, PropertySort } from '../../../util/arraydatabase';
import { SharedService } from '../../../services/shared/shared.service';
import { LocationAPIService, Location, LocationSearch } from '../../../services/api/location/locationapi.service';
import { Result, ResultObj, PageResultObj } from '../../../models/result';
import { AddEditLocationDialogComponent } from '../addeditlocationdialog/addeditlocationdialog.component';
import { SearchLocationDialogComponent } from '../searchlocationdialog/searchlocationdialog.component';
import { ConfirmationDialogueComponent } from '../../../util/confirmationdialogue/confirmationdialogue.component';

@Component({
    selector: 'app-management',
    templateUrl: './management.component.html',
    styleUrls: ['./management.component.css']
})
export class LocationManagementComponent implements OnInit {

    public inProgress: boolean;
    public currentPage: PageResultObj<Array<Location>>;
    public quickSearchVal: string;
    public searchParams: LocationSearch;

    public displayedColumns = ['ID', 'Name', 'Description', 'Actions'];

    public locationDatabase: ArrayDatabase<Location>;
    public locationDataSource: ArrayDataSource<Location>;

    constructor(private shared: SharedService, private locationAPI: LocationAPIService, private dialog: MatDialog) {
        this.shared.setTitle("Location Management");

        this.currentPage = new PageResultObj<Array<Location>>();
        this.searchParams = new LocationSearch();
        this.locationDatabase = new ArrayDatabase<Location>();
        this.locationDataSource = new ArrayDataSource(this.locationDatabase);
    }

    ngOnInit() {
    }

    public authReady() {
        this.search();
    }

    // Search
    public search() {
        if (!this.inProgress) {
            this.inProgress = true;
            this.locationAPI.searchLocation(this.searchParams).subscribe(result => {
                if (result.Success) {
                    this.currentPage = result;
                    this.locationDatabase.setDB(result.ReturnObj);
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
        var ref = this.dialog.open(SearchLocationDialogComponent);
        var instance = ref.componentInstance;

        instance.search = this.searchParams;

        ref.afterClosed()
            .map(res => JSON.parse(res || false) as boolean)
            .subscribe(res => {
                if (res)
                    this.search();
            });
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

    // Locations

    public addLocation() {
        var ref = this.dialog.open(AddEditLocationDialogComponent);
        var instance = ref.componentInstance;


        instance.location = new Location();
        instance.setText("Add Location", "Add");

        ref.afterClosed()
            .map(res => JSON.parse(res || false) as boolean)
            .subscribe(res => {
                if (res)
                    this.locationAPI.addLocation(instance.location)
                        .subscribe(res => {
                            if (res.Success) {
                                this.search();
                                this.shared.notification("Add was Successful");
                            }
                        });
            });
    }

    public editLocation(location: Location) {
        var ref = this.dialog.open(AddEditLocationDialogComponent);
        var instance = ref.componentInstance;

        instance.location = location;
        instance.setText("Edit Location", "Edit");

        ref.afterClosed()
            .map(res => JSON.parse(res || false) as boolean)
            .subscribe(res => {
                if (res)
                    this.locationAPI.updateLocation(instance.location)
                        .subscribe(res => {
                            if (res.Success) {
                                this.search();
                                this.shared.notification("Edit was Successful");
                            }
                        });
            });
    }

    public deleteLocation(location: Location) {
        var ref = this.dialog.open(ConfirmationDialogueComponent);
        var instance = ref.componentInstance;

        instance.setAllText("Remove", "Are you sure you want to remove this location?", "Remove", "Cancel");

        ref.afterClosed()
            .map(res => JSON.parse(res || false) as boolean)
            .subscribe(res => {
                if (res)
                    this.locationAPI.removeLocation(location.ID).subscribe(res => {
                        if (res.Success) {
                            this.search();
                            this.shared.notification("Removal was Successful");
                        }
                    });
            });
    }
}
