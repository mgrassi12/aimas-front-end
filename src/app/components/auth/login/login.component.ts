import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { SharedService, EMAIL_REGEX } from '../../../services/shared/shared.service';
import { AuthAPIService, UserLoginModel } from '../../../services/api/auth/authapi.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    public get EMAIL_REGEX() { return EMAIL_REGEX; }

    public inProgress: boolean;
    public errorMessage: string;

    public loginModel: UserLoginModel;

    constructor(private shared: SharedService, private auth: AuthAPIService, private fb: FormBuilder, private router: Router) {
        this.shared.setTitle("Login");
        this.loginModel = new UserLoginModel();
    }

    ngOnInit() {

    }

    public login() {
        if (!this.inProgress) {
            this.auth.logIn(this.loginModel).subscribe(result => {
                if (!result.Success) {
                    this.errorMessage = result.ErrorMessage;
                }

                this.inProgress = false;
            });
            this.inProgress = true;
            this.errorMessage = "";
        }
    }

}
