import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { SharedService } from '../../shared/shared.service';
import { Result, ResultObj } from '../../../models/result';
import { CurrentUserInfo } from '../../../models/auth';
import { User, RegisterModel, UserLoginModel } from '../../../models/user';

// Exports
export { Result, ResultObj } from '../../../models/result';
export { CurrentUserInfo } from '../../../models/auth';
export { User, RegisterModel, UserLoginModel } from '../../../models/user';


@Injectable()
export class AuthAPIService {

    public authReady: Promise<void>;
    public authInfo: CurrentUserInfo;

    constructor(private http: HttpClient, private shared: SharedService) {
        this.authInfo = new CurrentUserInfo();

        this.authReady = new Promise<void>((resolve, reject) => {
            this.getInfo().subscribe(result => {
                if (result.Success) {
                    resolve();
                }
                else {
                    reject(result);
                }
            })
        });
    }

    public getInfo() {
        return this.http.get(this.shared.API.Auth.Info)
            .map(res => ResultObj.ResultObjFromJson<CurrentUserInfo>(res, CurrentUserInfo))
            .map(result => {
                if (result.Success)
                    this.authInfo = result.ReturnObj;
                return result;
            });
    }

    public logIn(loginDetails:UserLoginModel) {
        return this.http.post(this.shared.API.Auth.Login, loginDetails)
            .map(res => Result.ResultFromJson(res))
            .map(result => {
                if (result.Success)
                    this.getInfo().subscribe();
                return result;
            });
    }

    public logout() {
        return this.http.get(this.shared.API.Auth.Logout)
            .map(res => Result.ResultFromJson(res))
            .map(result => {
                if (result.Success)
                    this.getInfo().subscribe();
                return result;
            });
    }
}
