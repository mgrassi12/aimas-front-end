import { NgModule } from '@angular/core';

import {
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatTooltipModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatDatepickerModule,
    MatPaginatorModule,
    MatExpansionModule,
    MatCardModule,
    MatSnackBarModule,
    MatSelectModule,
    MatStepperModule,
    MatChipsModule
} from '@angular/material';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DateAdapter, MAT_DATE_FORMATS } from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';
import { MomentDateAdapter, MOMENT_DATE_FORMATS } from './util/momentdateadapter';

const MATERIAL_MODULES = [
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatTooltipModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatDatepickerModule,
    MatPaginatorModule,
    MatExpansionModule,
    MatCardModule,
    MatSnackBarModule,
    MatSelectModule,
    MatStepperModule,
    MatChipsModule,

    BrowserAnimationsModule,
    FlexLayoutModule,
    CdkTableModule

];

@NgModule({
    imports: MATERIAL_MODULES,
    providers: [
        { provide: DateAdapter, useClass: MomentDateAdapter },
        { provide: MAT_DATE_FORMATS, useValue: MOMENT_DATE_FORMATS },
    ],
    exports: MATERIAL_MODULES
})
export class MaterialModule { }
