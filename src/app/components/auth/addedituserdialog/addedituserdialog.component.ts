import { Component, OnInit } from '@angular/core';

import { RegisterModel, Role } from '../../../models/user';

@Component({
    selector: 'app-addedituserdialog',
    templateUrl: './addedituserdialog.component.html',
    styleUrls: ['./addedituserdialog.component.css']
})
export class UserAddEditDialogComponent implements OnInit {

    public title: string;
    public btnText: string;
    public isEdit: boolean;
    public user: RegisterModel;

    public roleStr: string;
    public roles: Array<role>;


    constructor() {
        this.roles = [
            { factor: 1, title: "Admin" },
            { factor: 2, title: "InventoryManager" },
            { factor: 3, title: "User" }
        ];
    }

    ngOnInit() {
    }

    public setText(title: string, btn: string, edit: boolean = false) {
        this.title = title;
        this.btnText = btn;
        this.isEdit = edit;
    }

    public addRole() {
        if (this.roleStr != null && this.user.UserRoles.find(x => x.Name == this.roleStr) == null) {
            let role = new Role();
            role.Name = this.roleStr;
            this.user.UserRoles.push(role);
        }
    }

    public removeRole(change: Role) {
        this.user.UserRoles.splice(this.user.UserRoles.indexOf(change), 1)
    }

}

interface role {
    factor: number;
    title: string;
}
