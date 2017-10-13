import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, Subscriber, Subject } from 'rxjs';

import { SharedService } from '../../shared/shared.service';
import { Result, ResultObj, PageResultObj } from '../../../models/result';
import { CurrentUserInfo } from '../../../models/auth';
import { User, RegisterModel, UserLoginModel, UserSearch } from '../../../models/user';

// Exports
export { Result, ResultObj, PageResultObj } from '../../../models/result';
export { CurrentUserInfo } from '../../../models/auth';
export { User, RegisterModel, UserLoginModel, UserSearch } from '../../../models/user';


@Injectable()
export class AuthAPIService {

    private _authInfo: CurrentUserInfo;
    public get authInfo() {
        return this._authInfo;
    }
    private setAuthInfo(value: CurrentUserInfo) {
        this._authInfo = value;
        this.authChange.next(value);
    }

    public authChange: Subject<CurrentUserInfo>;
    public authReady: Promise<void>;

    constructor(private http: HttpClient, private shared: SharedService) {
        this._authInfo = new CurrentUserInfo();
        this.authChange = new Subject<CurrentUserInfo>();
        this.authReady = new Promise<void>((resolve, reject) => {
            this.getInfo().subscribe((result) => {
                if (result.Success)
                    resolve();
                else
                    reject(result.ErrorMessage);
            });
        });
    }

    public getInfo() {
        return this.http.get(this.shared.API.Auth.Info)
            .map(res => ResultObj.ResultObjFromJson<CurrentUserInfo>(res, CurrentUserInfo))
            .catch(errorReponse => {
                let errorMSG = SharedService.GetHTTPErrorMessage(errorReponse);
                let mockPage = new ResultObj<CurrentUserInfo>();
                mockPage.ReturnObj = new CurrentUserInfo();
                mockPage.ErrorMessage = errorMSG;
                this.shared.notification(errorMSG);
                return Observable.of(mockPage);
            })
            .map(result => {
                if (result.Success) {
                    this.setAuthInfo(result.ReturnObj);
                }
                else {
                    this.setAuthInfo(new CurrentUserInfo());
                    this.authChange.error(result.ErrorMessage);
                }
                return result;
            });
    }

    public logIn(loginDetails: UserLoginModel) {
        return this.http.post(this.shared.API.Auth.Login, loginDetails)
            .map(res => Result.ResultFromJson(res))
            .catch(errorReponse => {
                let errorMSG = SharedService.GetHTTPErrorMessage(errorReponse);
                let mockPage = new Result();
                mockPage.ErrorMessage = errorMSG;
                return Observable.of(mockPage);
            })
            .map(result => {
                if (result.Success)
                    this.getInfo().subscribe();
                return result;
            });
    }

    public logout() {
        return this.http.get(this.shared.API.Auth.Logout)
            .map(res => Result.ResultFromJson(res))
            .catch(errorReponse => {
                let errorMSG = SharedService.GetHTTPErrorMessage(errorReponse);
                let mockPage = new Result();
                mockPage.ErrorMessage = errorMSG;
                return Observable.of(mockPage);
            })
            .map(result => {
                if (result.Success)
                    this.getInfo().subscribe();
                return result;
            });
    }

    public newUser(user: RegisterModel) {
        return this.http.post(this.shared.API.Auth.Add, user)
            .map(res => Result.ResultFromJson(res))
    }

    public updateUser(user: RegisterModel) {
        return this.http.post(this.shared.API.Auth.Update, user)
            .map(res => Result.ResultFromJson(res));

    }

    public searchUser(search: UserSearch) {
        return this.http.post(this.shared.API.Auth.SearchUsers, search)
            .map(res => PageResultObj.PageResultObjFromJson<Array<User>>(res, User, true));
    }

}
