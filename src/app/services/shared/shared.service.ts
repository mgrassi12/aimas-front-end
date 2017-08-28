import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';


@Injectable()
export class SharedService {

    public environment = environment;

    // API Routes
    public API = {
        Inventory: {
            All: "/api/inventory/all"
        },
        Auth: {
            Info: "/api/auth/info",
            Login: "/api/auth/login",
            Logout: "/api/auth/logout",
            Users: "/api/auth/users"
        }
    }

    constructor() {

    }

}