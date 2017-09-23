import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, Subscriber, Subject } from 'rxjs';

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
    
    public authChange: Subject<CurrentUserInfo>;
    public authInfo: CurrentUserInfo;

    constructor(private http: HttpClient, private shared: SharedService) {
        this.authInfo = new CurrentUserInfo();

        this.authChange = new Subject<CurrentUserInfo>();
        this.getInfo().subscribe();
    }

    public getInfo() {
        return this.http.get(this.shared.API.Auth.Info)
            .map(res => ResultObj.ResultObjFromJson<CurrentUserInfo>(res, CurrentUserInfo))
            .map(result => {
                if (result.Success) {
                    this.authInfo = result.ReturnObj;
                    this.authChange.next(this.authInfo);
                }
                else {
                    this.authChange.error(result);
                }
                return result;
            });
    }

    public logIn(loginDetails: UserLoginModel) {
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
