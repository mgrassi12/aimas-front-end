import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SharedService } from './services/shared/shared.service';
import { AuthAPIService } from './services/api/auth/authapi.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    public get title() {
        return this.shared.title;
    }

    public get authInfo() {
        return this.auth.authInfo;
    }

    constructor(private shared: SharedService, private auth: AuthAPIService, private router: Router) {
        this.auth.authChange.subscribe(info => {
            this.checkAuth();
        });
    }

    ngOnInit() {

    }

    private checkAuth() {
        if (!this.authInfo.IsAuth && !this.router.isActive('/error', false)) {
            this.router.navigate(["/auth/login"]);
        }
        else if (this.router.isActive("/auth/login", false)) {
            this.router.navigate(["/inventory/dashboard"]);
        }
    }

    public logout() {
        this.auth.logout().subscribe();
    }

}
