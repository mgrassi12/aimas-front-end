import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthAPIService } from './services/api/auth/authapi.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    public title = 'app';

    public get authInfo() {
        return this.auth.authInfo;
    }

    constructor(private auth: AuthAPIService, private router: Router) {

    }

    ngOnInit() {
        this.auth.authReady.then((authInfo) => {
            if (!authInfo.IsAuth && !this.router.isActive('/error', false)) {
                this.router.navigate(["/auth/login"]);
            }
        });
    }

    public logout() {
        if (this.authInfo.IsAuth)
            this.auth.logout().subscribe(result => {
                if (result.Success)
                    this.router.navigate(["/auth/login"]);
            });
    }

}
