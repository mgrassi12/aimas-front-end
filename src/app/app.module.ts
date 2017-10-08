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
import { AddEditUserDialogComponent } from './components/auth/addedituserdialog/addedituserdialog.component';
import { UserManagementComponent } from './components/auth/usermanagement/usermanagement.component';

// Services
import { SharedService } from './services/shared/shared.service'
import { AuthAPIService } from './services/api/auth/authapi.service'
import { InventoryAPIService } from './services/api/inventory/inventoryapi.service';



@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        MaterialModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        MomentModule,
        RouterModule.forRoot(
            [
                { path: '', redirectTo: '/inventory/dashboard', pathMatch: 'full' }
                , { path: 'inventory/dashboard', component: InventoryDashboardComponent }
                , { path: 'inventory/management', component: InventoryManagementComponent }
                , { path: 'auth/login', component: LoginComponent }
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
        AddEditUserDialogComponent,
        UserManagementComponent,
    ],
    providers: [
        SharedService,
        AuthAPIService,
        InventoryAPIService,
        { provide: LOCALE_ID, useValue: 'en-AU' }
    ],
    entryComponents: [
        InventorySearchDialogComponent,
        InventoryAddEditDialogComponent,
        ConfirmationDialogueComponent,
        AddEditUserDialogComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
