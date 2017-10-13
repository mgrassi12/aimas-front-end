import { Component, OnInit } from '@angular/core';

import { RegisterModel } from '../../../models/user';

@Component({
  selector: 'app-addedituserdialog',
  templateUrl: './addedituserdialog.component.html',
  styleUrls: ['./addedituserdialog.component.css']
})
export class UserAddEditDialogComponent implements OnInit {

    public title: string;
    public btnText: string;
    public user: RegisterModel;


    constructor() { }

    ngOnInit() {
    }

    public setText(title: string, btn: string) {
        this.title = title;
        this.btnText = btn;
    }


}
