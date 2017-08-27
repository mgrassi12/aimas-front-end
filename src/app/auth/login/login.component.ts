import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthAPIService } from '../../services/api/auth/authapi.service';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    public loginForm: FormGroup;

    constructor(private auth: AuthAPIService, private fb: FormBuilder, private router: Router) {
        this.loginForm = this.fb.group({
            email: ['', Validators.compose([Validators.required, Validators.pattern(EMAIL_REGEX)])],
            password: ['', Validators.required]
        });
    }

    ngOnInit() {

    }

    public login() {
        if (this.loginForm.valid) {
            var form = this.loginForm.value as LoginForm;
            this.auth.logIn(form.email, form.password).subscribe(result => {
                if (result.Success) {
                    this.router.navigate(["inventory/dashboard"]);
                }
            });
        }
    }

}

interface LoginForm {
    email: string;
    password: string;
}
