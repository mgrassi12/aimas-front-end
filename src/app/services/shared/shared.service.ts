import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpErrorResponse } from "@angular/common/http";
import { MatSnackBar } from '@angular/material';

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
            Remove: "/api/inventory/remove/{id}",
            Alerts: "/api/inventory/alerts/{id}",
            Locations: "api/inventory/locations"
        },
        Reservation: {
            Search:"api/reservation/search"
        },
        Auth: {
            Info: "/api/auth/info",
            Login: "/api/auth/login",
            Logout: "/api/auth/logout",
            AllUsers: "/api/auth/users",
            SearchUsers: "/api/auth/user/search",
            Add: "/api/auth/register/user",
        }
    }

    constructor(public snackBar: MatSnackBar) {
        this.title = "AIMAS";
    }

    public setTitle(title: string) {
        this.title = title;
    }

    notification(message: string) {
        this.snackBar.open(message, null, {
            duration: 5000,
        });
    }

    // Static

    public static GetHTTPErrorMessage(errorReponse) {
        let errMsg: string;
        if (errorReponse instanceof HttpErrorResponse) {
            let err = errorReponse.message || JSON.stringify(errorReponse.error);
            errMsg = `${errorReponse.status} - ${errorReponse.statusText || ''} Details: ${err}`;
        } else {
            errMsg = errorReponse.message ? errorReponse.message : errorReponse.toString();
        }
        return errMsg;
    }

}
