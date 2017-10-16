import { Component, OnInit } from '@angular/core';
import { MatDialog, PageEvent } from '@angular/material';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { SharedService, EMAIL_REGEX } from '../../../services/shared/shared.service';
import { AuthAPIService, UserLoginModel, UserSearch, User, PageResultObj, RegisterModel } from '../../../services/api/auth/authapi.service';
import { ArrayDatabase, ArrayDataSource, PropertySort } from '../../../util/arraydatabase';


import { UserAddEditDialogComponent } from '../addedituserdialog/addedituserdialog.component';
import { UserSearchDialogComponent } from '../usersearchdialog/usersearchdialog.component';
import { ConfirmationDialogueComponent } from '../../../util/confirmationdialogue/confirmationdialogue.component';

import { Role } from '../../../models/user';

@Component({
    selector: 'app-usermanagement',
    templateUrl: './usermanagement.component.html',
    styleUrls: ['./usermanagement.component.css']
})
export class UserManagementComponent implements OnInit {

    public inProgress: boolean;
    public searchParams: UserSearch;
    public quickSearchVal: string;
    public currentPage: PageResultObj<Array<User>>;

    public userDatabase: ArrayDatabase<User>;
    public userDataSource: ArrayDataSource<User>;


    public displayedColumns = ['FirstName', 'LastName', 'Email', 'Position', 'Role', 'Actions'];

    constructor(private shared: SharedService, private authAPI: AuthAPIService, private dialog: MatDialog) {
        this.shared.setTitle("User Management");

        this.searchParams = new UserSearch();
        this.currentPage = new PageResultObj<Array<User>>();
        this.userDatabase = new ArrayDatabase<User>();
        this.userDataSource = new ArrayDataSource(this.userDatabase);
    }

    ngOnInit() {
    }

    public authReady() {
        this.search();

    }

    //Searching

    public search() {
        if (!this.inProgress) {
            this.inProgress = true;
            this.authAPI.searchUser(this.searchParams).subscribe(result => {
                if (result.Success) {
                    this.currentPage = result;
                    this.userDatabase.setDB(result.ReturnObj);
                }
                this.inProgress = false;
            });
        }
    }

    public quickSearch() {
        this.searchParams.clear()
        this.searchParams.FirstName = this.quickSearchVal;
        this.search()
    }

    public clearSearch() {
        this.searchParams.clear();
        this.quickSearchVal = "";
        this.search();
    }

    public showSearchOptionsDialog() {
        var ref = this.dialog.open(UserSearchDialogComponent);
        var instance = ref.componentInstance;

        instance.search = this.searchParams;

        ref.afterClosed()
            .map(res => JSON.parse(res || false) as boolean)
            .subscribe(res => {
                if (res)
                    this.search();
            });
    }




    //Users
    public addUser() {
        var ref = this.dialog.open(UserAddEditDialogComponent);
        var instance = ref.componentInstance;

        instance.user = new RegisterModel();
        instance.setText("Add User", "Add");
        instance.user.UserRoles = new Array<Role>();

        ref.afterClosed()
            .map(res => JSON.parse(res) as boolean)
            .subscribe(res => {
                if (res)
                    this.authAPI.newUser(instance.user)
                        .subscribe(res => {
                            if (res.Success) {
                                this.search();
                                this.shared.notification("Add was Successful");
                            }
                        });

            });
    }

    public editUser(user: User) {
        var ref = this.dialog.open(UserAddEditDialogComponent);
        var instance = ref.componentInstance;

        instance.user = Object.assign(new RegisterModel(), user);
        instance.setText("Edit User", "Edit");

        ref.afterClosed()
            .map(res => JSON.parse(res || false) as boolean)
            .subscribe(res => {
                if (res)
                    this.authAPI.updateUser(instance.user)
                        .subscribe(res => {
                            if (res.Success) {
                                this.search();
                                this.shared.notification("Edit was Successful");
                            } else {
                                this.search();
                                this.shared.notification("An error occured. Please try again");
                            }
                        });
            });
    }

    public deleteUser(user: User) {
        var ref = this.dialog.open(ConfirmationDialogueComponent);
        var instance = ref.componentInstance;

        instance.setAllText("Remove", "Are you sure?", "Remove", "Cancel");

        ref.afterClosed()
            .map(res => JSON.parse(res || false) as boolean)
            .subscribe(res => {
                if (res)
                    this.authAPI.removeUser(user.Id).subscribe(res => {
                        if (res.Success) {
                            this.search();
                            this.shared.notification("Removal was Successful");
                        }
                    });
            });
    }


}
