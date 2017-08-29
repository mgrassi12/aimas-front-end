import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { SharedService } from '../../shared/shared.service';
import { Result, ResultObj } from '../../../models/result';
import { CurrentUserInfo } from '../../../models/auth';
import { User, UserPassword } from '../../../models/user';

// Exports
export { Result, ResultObj } from '../../../models/result';
export { CurrentUserInfo } from '../../../models/auth';
export { User, UserPassword } from '../../../models/user';


@Injectable()
export class AuthAPIService {

    public authReady: Promise<CurrentUserInfo>;
    public authInfo: CurrentUserInfo;

    constructor(private http: HttpClient, private shared: SharedService) {
        this.authInfo = new CurrentUserInfo();

        this.authReady = new Promise<CurrentUserInfo>((resolve, reject) => {
            this.getInfo().subscribe(result => {
                if (result.Success) {
                    resolve(this.authInfo);
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

    public logIn(email: string, password: string) {
        let userDetails = new UserPassword();
        userDetails.Email = email;
        userDetails.Password = password;

        return this.http.post(this.shared.API.Auth.Login, userDetails)
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
