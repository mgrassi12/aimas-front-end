import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

//Formats
export const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
export const DateFormat = /(\d{4})-(\d{2})-(\d{2})T(\d{2})\:(\d{2})\:(\d{2})(\.\d{3})?Z/;


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
