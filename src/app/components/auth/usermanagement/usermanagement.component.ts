import { Component, OnInit } from '@angular/core';
import { MatDialog, PageEvent } from '@angular/material';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { SharedService, EMAIL_REGEX } from '../../../services/shared/shared.service';
import { AuthAPIService, UserLoginModel } from '../../../services/api/auth/authapi.service';
import { UserAddEditDialogComponent } from '../addedituserdialog/addedituserdialog.component';

@Component({
    selector: 'app-usermanagement',
    templateUrl: './usermanagement.component.html',
    styleUrls: ['./usermanagement.component.css']
})
export class UserManagementComponent implements OnInit {

    constructor(private shared: SharedService, private auth: AuthAPIService, public dialog: MatDialog) {
        this.shared.setTitle("User Management");
    }

    ngOnInit() {
    }

    public addUser() {
        var ref = this.dialog.open(UserAddEditDialogComponent);
        var instance = ref.componentInstance;

        instance.setText("Add User", "Add");
    }
}
