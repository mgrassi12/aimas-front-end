
// API Testing
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
export { HttpTestingController } from '@angular/common/http/testing';
export const APIImports = [
    HttpClientTestingModule
];


// Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';
export const MaterialImports = [
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    CdkTableModule,
];

// Others
export { RouterTestingModule } from '@angular/router/testing';
export * from './app/models/user';
export * from './app/models/inventory';
export * from './app/models/auth';
export * from './app/models/result';



// Test Data
import { Inventory } from './app/models/inventory';

let I1 = new Inventory();
I1.ID = 1;
I1.Name = "Test #1";
let I2 = new Inventory();
I2.ID = 2;
I1.Name = "Test #2";
let I3 = new Inventory();
I3.ID = 3;
I1.Name = "Test #3";
export const ExpectedInventoryTestData = [I1, I2, I3];
