import { Component, OnInit } from '@angular/core';
import { MdDialog, PageEvent } from '@angular/material';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { SharedService, EMAIL_REGEX } from '../../../services/shared/shared.service';
import { AuthAPIService, UserLoginModel, RegisterModel } from '../../../services/api/auth/authapi.service';
import { ArrayDatabase, ArrayDataSource, PropertySort } from '../../../util/arraydatabase';

import { AddEditUserDialogComponent } from '../addedituserdialog/addedituserdialog.component';

import { User } from '../../../models/user';

@Component({
    selector: 'app-usermanagement',
    templateUrl: './usermanagement.component.html',
    styleUrls: ['./usermanagement.component.css']
})
export class UserManagementComponent implements OnInit {

    constructor(private shared: SharedService, private auth: AuthAPIService, public dialog: MdDialog, public register: RegisterModel) {
        this.shared.setTitle("User Management");
    }

    ngOnInit() {
    }

    public addUser() {
        var ref = this.dialog.open(AddEditUserDialogComponent);
        var instance = ref.componentInstance;

        instance.user = new User();
        instance.setText("Add User", "Add");

        ref.afterClosed()
            .map(res => JSON.parse(res) as boolean)
            .subscribe(res => {
                if (res)
                    this.auth.newUser(instance.user)
                        .subscribe(res => {
                            if (res.Success) {
                                this.shared.notification("Add was Successful");
                            }
                        });

            });
    }

}
