// NG
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule, DateAdapter, MD_DATE_FORMATS } from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';

// App
import { AppComponent } from './app.component';
import { InventoryDashboardComponent } from './inventory/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { InventoryManagementComponent } from './inventory/management/management.component'
import { ListButtonComponent } from './util/list-button/list-button.component';
import { MomentDateAdapter, MOMENT_DATE_FORMATS } from './util/momentdateadapter';

// Services
import { SharedService } from './services/shared/shared.service'
import { AuthAPIService } from './services/api/auth/authapi.service'
import { InventoryAPIService } from './services/api/inventory/inventoryapi.service';
import { InventorySearchDialogComponent } from './inventory/searchdialog/searchdialog.component';
import { AddEditDialogComponent } from './inventory/addeditdialog/addeditdialog.component';


@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FlexLayoutModule,
        MaterialModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        CdkTableModule,
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
        AddEditDialogComponent
    ],
    providers: [
        SharedService,
        AuthAPIService,
        InventoryAPIService,
        { provide: LOCALE_ID, useValue: 'en-AU' },
        { provide: DateAdapter, useClass: MomentDateAdapter },
        { provide: MD_DATE_FORMATS, useValue: MOMENT_DATE_FORMATS },
    ],
    entryComponents: [
        InventorySearchDialogComponent,
        AddEditDialogComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
