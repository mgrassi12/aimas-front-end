// NG
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@angular/material';

// App
import { AppComponent } from './app.component';
import { InventoryDashboardComponent } from './inventory/dashboard/dashboard.component';
import { ListButtonComponent } from './util/list-button/list-button.component';

// Services
import { SharedService } from './services/shared/shared.service'
import { AuthAPIService } from './services/api/auth/authapi.service'
import { InventoryAPIService } from './services/api/inventory/inventoryapi.service';
import { LoginComponent } from './auth/login/login.component'

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FlexLayoutModule,
        MaterialModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(
            [
                { path: '', redirectTo: '/inventory/dashboard', pathMatch: 'full' }
                , { path: 'inventory/dashboard', component: InventoryDashboardComponent }
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
        LoginComponent
    ],
    providers: [
        SharedService,
        AuthAPIService,
        InventoryAPIService
    ],
    entryComponents: [

    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
