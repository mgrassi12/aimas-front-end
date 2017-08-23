// NG
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@angular/material';

// App
import { AppComponent } from './app.component';
import { InventoryDashboardComponent } from './inventory/dashboard/dashboard.component';
import { ListButtonComponent } from './util/list-button/list-button.component';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FlexLayoutModule,
        MaterialModule,
        RouterModule.forRoot(
            [
                { path: '', redirectTo: '/inventoty/dashboard', pathMatch: 'full' }
                , { path: 'inventoty/dashboard', component: InventoryDashboardComponent }
                //, { path: '**', component: PageNotFoundComponent }
            ]
            , { enableTracing: true } // <-- debugging purposes only
        )
    ],
    declarations: [
        AppComponent,
        InventoryDashboardComponent,
        ListButtonComponent
    ],
    providers: [

    ],
    entryComponents: [

    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
