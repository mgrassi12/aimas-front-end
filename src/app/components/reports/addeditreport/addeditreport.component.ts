import { Component, OnInit } from '@angular/core';


import { Report } from "../../../models/report";
import { AuthAPIService } from "../../../../test.global";
import { User } from "../../../models/user";

@Component({
    selector: 'app-addeditreport',
    templateUrl: './addeditreport.component.html',
    styleUrls: ['./addeditreport.component.css']
})
export class AddEditReportComponent implements OnInit {

    public btnText: string;
    public title: string;
    public get now() {
        return new Date();
    }
    public showType: boolean;

    public report: Report;
    public users: Array<User>;

    constructor(private authAPI: AuthAPIService) {
        this.authAPI.getUsers().subscribe(res => {
            if (res.Success)
                this.users = res.ReturnObj;
        });
    }

    ngOnInit() {

    }

    public setText(title: string, btn: string, showType: boolean = true) {
        this.title = title;
        this.btnText = btn;
        this.showType = showType;
    }

}
