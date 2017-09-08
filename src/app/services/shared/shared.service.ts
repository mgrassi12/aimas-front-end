import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

//Formats
export const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
export const DateFormat = /^(0[1-9]|[12][0-9]|3[01])[/](0[1-9]|1[012])[/](19|20)\d\d/;


@Injectable()
export class SharedService {

    public title: string;

    public environment = environment;

    // API Routes
    public API = {
        Inventory: {
            All: "/api/inventory/all",
            Search: "/api/inventory/search",
            Add: "/api/inventory/add",
            Update: "/api/inventory/update",
            Remove: "/api/inventory/remove/{id}"
        },
        Auth: {
            Info: "/api/auth/info",
            Login: "/api/auth/login",
            Logout: "/api/auth/logout",
            Users: "/api/auth/users"
        }
    }

    constructor() {
        this.title = "AIMAS";
    }

    public setTitle(title: string) {
        this.title = title;
    }

}
