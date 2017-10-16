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
    public user: RegisterModel;
    public adderRole: Role;
    public roleTitle: string;

    public roles: Array<role>;
    public present: boolean;


    constructor() {
        this.roles = [
            { factor: 1, title: "Admin" },
            { factor: 2, title: "InventoryManager" },
            { factor: 3, title: "User" }
        ];
        this.present = false;
    }

    ngOnInit() {
    }

    public setText(title: string, btn: string) {
        this.title = title;
        this.btnText = btn;
    }

    public addRole(roler: string) {
        if (roler != null) {
            for (let things of this.user.UserRoles) {
                if (things.Name == roler) {
                    this.present = true;
                }
            }
            if (this.present == false) {
                this.adderRole = new Role();
                this.adderRole.Name = roler;
                this.user.UserRoles.push(this.adderRole);
            }
        }
        this.present = false;
    }

    public removeRole(change: Role) {
        this.user.UserRoles.splice(this.user.UserRoles.indexOf(change),1)
    }

}

interface role {
    factor: number;
    title: string;
}
