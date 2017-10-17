// import Angular
import { LOCALE_ID } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// API Testing
import { HttpClientTestingModule } from '@angular/common/http/testing';
export { HttpTestingController } from '@angular/common/http/testing';

// API
import { AuthAPIService } from './app/services/api/auth/authapi.service';
import { SharedService } from './app/services/shared/shared.service';
import { InventoryAPIService } from './app/services/api/inventory/inventoryapi.service';
import { ReportAPIService } from './app/services/api/report/reportapi.service';
import { ReservationAPIService } from './app/services/api/reservation/reservationapi.service';
import { UtilAPIService } from './app/services/api/util/utilapi.service';

import { MatSnackBarModule } from "@angular/material";


export const APIImports = [
    HttpClientTestingModule,
    MatSnackBarModule
];

export const APIProviders = [
    SharedService,
    AuthAPIService,
    InventoryAPIService,
    ReportAPIService,
    ReservationAPIService,
    UtilAPIService
];



// Material
import { MaterialModule } from './app/material.module';
export { MaterialModule } from './app/material.module';
import { MatDialogRef } from "@angular/material";
import { MomentModule } from 'angular2-moment';

// Others
export { RouterTestingModule } from '@angular/router/testing';
export { MomentModule } from 'angular2-moment';
export * from './app/models/user';
export * from './app/models/inventory';
export * from './app/models/auth';
export * from './app/models/result';
export * from './app/models/models';
export * from './app/models/report';
export * from './app/models/reservation';
import { AuthModule } from './app/directives/auth/auth.directive';
export { AuthModule } from './app/directives/auth/auth.directive';


export const CommonImports = [
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    AuthModule,
    MomentModule
];

export const LoccalProvider = [
    { provide: LOCALE_ID, useValue: 'en-AU' }
]

class MdDialogRefMock {
}
export const DialogProvider = [
    { provide: MatDialogRef, useClass: MdDialogRefMock }
]


// Test Data
import { Inventory } from './app/models/inventory';
import { Location } from './app/models/models';


export const ExpectedInventoryTestData: Array<Inventory> = [
    createInventoryItem(1, "Test #1"),
    createInventoryItem(2, "Test #2"),
    createInventoryItem(3, "Test #3")
];

function createInventoryItem(id: number, name: string) {
    let item = new Inventory();
    item.ID = id;
    item.Name = name;
    //item.Location = new Location();
    item.ExpirationDate = new Date();
    item.MaintenanceIntervalDays = 10;
    return item;
}
