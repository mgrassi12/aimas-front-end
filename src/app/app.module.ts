// NG
import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MomentModule } from 'angular2-moment';

//Material
import { MaterialModule } from "./material.module";

// App
import { AppComponent } from './app.component';
import { InventoryDashboardComponent } from './components/inventory/dashboard/dashboard.component';
import { LoginComponent } from './components/auth/login/login.component';
import { InventoryManagementComponent } from './components/inventory/management/management.component'
import { ListButtonComponent } from './util/list-button/list-button.component';
import { InventorySearchDialogComponent } from './components/inventory/searchdialog/searchdialog.component';
import { InventoryAddEditDialogComponent } from './components/inventory/addeditdialog/addeditdialog.component';
import { ConfirmationDialogueComponent } from './util/confirmationdialogue/confirmationdialogue.component';
import { UserAddEditDialogComponent } from './components/auth/addedituserdialog/addedituserdialog.component';
import { UserManagementComponent } from './components/auth/usermanagement/usermanagement.component';
import { ReservationManagementComponent } from './components/reservation/management/management.component';
import { ReservationAddEditDialogComponent } from './components/reservation/addeditdialog/addeditdialog.component';
import { ReservationSearchDialogComponent } from './components/reservation/searchdialog/searchdialog.component';
import { UserSearchDialogComponent } from './components/auth/usersearchdialog/usersearchdialog.component';
import { ReportManagementComponent } from './components/reports/management/management.component';
import { AddEditReportComponent } from './components/reports/addeditreport/addeditreport.component';
import { ReportSearchDialogComponent } from './components/reports/searchdialog/searchdialog.component';
import { ReservationDetailsDialogComponent } from './components/reservation/detailsdialog/detailsdialog.component';
import { LocationManagementComponent } from './components/location/management/management.component';
import { AddEditLocationDialogComponent } from './components/location/addeditlocationdialog/addeditlocationdialog.component';
import { SearchLocationDialogComponent } from './components/location/searchlocationdialog/searchlocationdialog.component';

// Services
import { SharedService } from './services/shared/shared.service'
import { AuthAPIService } from './services/api/auth/authapi.service'
import { InventoryAPIService } from './services/api/inventory/inventoryapi.service';
import { ReservationAPIService } from './services/api/reservation/reservationapi.service';
import { UtilAPIService } from './services/api/util/utilapi.service';
import { ReportAPIService } from "./services/api/report/reportapi.service";
import { LocationAPIService } from "./services/api/location/locationapi.service";
import { AuthModule } from './directives/auth/auth.directive';







@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        MaterialModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        MomentModule,
        AuthModule,
        RouterModule.forRoot(
            [
                { path: '', redirectTo: '/auth/login', pathMatch: 'full' },
                { path: 'inventory/dashboard', component: InventoryDashboardComponent },
                { path: 'inventory/management', component: InventoryManagementComponent },
                { path: 'auth/login', component: LoginComponent },
                { path: 'user/management', component: UserManagementComponent },
                { path: 'reservation/management', component: ReservationManagementComponent },
                { path: 'reports/management', component: ReportManagementComponent },
                { path: 'location/management', component: LocationManagementComponent }
                //, { path: '**', component: PageNotFoundComponent }
            ]
            //, { enableTracing: true } // <-- debugging purposes only
        )
    ],
    declarations: [
        AppComponent,
        InventoryDashboardComponent,
        ListButtonComponent,
        LoginComponent,
        InventoryManagementComponent,
        InventorySearchDialogComponent,
        InventoryAddEditDialogComponent,
        ConfirmationDialogueComponent,
        UserAddEditDialogComponent,
        UserManagementComponent,
        ReservationManagementComponent,
        ReservationAddEditDialogComponent,
        ReservationSearchDialogComponent,
        UserSearchDialogComponent,
        ReportManagementComponent,
        AddEditReportComponent,
        ReportSearchDialogComponent,
        ReservationDetailsDialogComponent,
        LocationManagementComponent,
        AddEditLocationDialogComponent,
        SearchLocationDialogComponent
    ],
    providers: [
        SharedService,
        AuthAPIService,
        InventoryAPIService,
        ReservationAPIService,
        UtilAPIService,
        ReportAPIService,
        LocationAPIService,
        { provide: LOCALE_ID, useValue: 'en-AU' }
    ],
    entryComponents: [
        InventorySearchDialogComponent,
        InventoryAddEditDialogComponent,
        ConfirmationDialogueComponent,
        UserAddEditDialogComponent,
        ReservationAddEditDialogComponent,
        ReservationSearchDialogComponent,
        UserSearchDialogComponent,
        AddEditReportComponent,
        ReportSearchDialogComponent,
        ReservationDetailsDialogComponent,
        AddEditLocationDialogComponent,
        SearchLocationDialogComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
