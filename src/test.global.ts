// import Angular
import { LOCALE_ID } from '@angular/core';

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
import { DateAdapter, MD_DATE_FORMATS } from '@angular/material';
import { MomentDateAdapter, MOMENT_DATE_FORMATS } from './app/util/momentdateadapter';
export const MaterialImports = [
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    CdkTableModule,
];

export const MaterialProviders = [
    { provide: LOCALE_ID, useValue: 'en-AU' },
    { provide: DateAdapter, useClass: MomentDateAdapter },
    { provide: MD_DATE_FORMATS, useValue: MOMENT_DATE_FORMATS },
]

// Others
export { RouterTestingModule } from '@angular/router/testing';
export * from './app/models/user';
export * from './app/models/inventory';
export * from './app/models/auth';
export * from './app/models/result';
export { MomentModule } from 'angular2-moment';



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
