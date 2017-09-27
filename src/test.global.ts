// import Angular
import { LOCALE_ID } from '@angular/core';

// API Testing
import { HttpClientTestingModule } from '@angular/common/http/testing';
export { HttpTestingController } from '@angular/common/http/testing';
import { MatSnackBarModule } from '@angular/material';
export const APIImports = [
    HttpClientTestingModule,
    MatSnackBarModule
];

// API
export { AuthAPIService } from './app/services/api/auth/authapi.service';
export { SharedService } from './app/services/shared/shared.service';
export { InventoryAPIService } from './app/services/api/inventory/inventoryapi.service';

// Material
export { MaterialModule } from './app/material.module';
export const Providers = [
    { provide: LOCALE_ID, useValue: 'en-AU' },
]

// Others
export { RouterTestingModule } from '@angular/router/testing';
export { MomentModule } from 'angular2-moment';
export * from './app/models/user';
export * from './app/models/inventory';
export * from './app/models/auth';
export * from './app/models/result';
export { AuthModule } from './app/directives/auth/auth.directive';



// Test Data
import { Inventory, Location } from './app/models/inventory';

export const ExpectedInventoryTestData: Array<Inventory> = [
    createInventoryItem(1, "Test #1"),
    createInventoryItem(2, "Test #2"),
    createInventoryItem(3, "Test #3")
];

function createInventoryItem(id: number, name: string) {
    let item = new Inventory();
    item.ID = id;
    item.Name = name;
    item.Location = new Location();
    item.ExpirationDate = new Date();
    item.MaintanceDate = new Date();
    return item;
}
