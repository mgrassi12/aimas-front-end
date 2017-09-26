import { NgModule } from '@angular/core';

import {
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatTooltipModule,
    MatDialogModule,
    MdIconModule,
    MdInputModule,
    MdFormFieldModule,
    MdTableModule,
    MdProgressSpinnerModule,
    MatDatepickerModule,
    MatPaginatorModule,
    MatExpansionModule,
    MatCardModule,
    MatSnackBarModule
} from '@angular/material';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DateAdapter, MD_DATE_FORMATS } from '@angular/material';
import { MomentDateAdapter, MOMENT_DATE_FORMATS } from './util/momentdateadapter';
import { CdkTableModule } from '@angular/cdk/table';


const MATERIAL_MODULES = [
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatTooltipModule,
    MatDialogModule,
    MdIconModule,
    MdInputModule,
    MdFormFieldModule,
    MdTableModule,
    MdProgressSpinnerModule,
    MatDatepickerModule,
    MatPaginatorModule,
    MatExpansionModule,
    MatCardModule,
    MatSnackBarModule,

    BrowserAnimationsModule,
    FlexLayoutModule,
    CdkTableModule

];

@NgModule({
    imports: MATERIAL_MODULES,
    providers: [
        { provide: DateAdapter, useClass: MomentDateAdapter },
        { provide: MD_DATE_FORMATS, useValue: MOMENT_DATE_FORMATS },
    ],
    exports: MATERIAL_MODULES
})
export class MaterialModule { }
