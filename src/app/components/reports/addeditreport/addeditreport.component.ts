import { Component, OnInit } from '@angular/core';


import { Report } from "../../../models/report";
import { AuthAPIService } from "../../../../test.global";
import { User } from "../../../models/user";

@Component({
    selector: 'app-addeditreport',
    templateUrl: './addeditreport.component.html',
    styleUrls: ['./addeditreport.component.css']
})
export class AddeditreportComponent implements OnInit {

    btnText: string;
    title: string;
    public get now() {
        return new Date();
    }

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

    public setText(title: string, btn: string) {
        this.title = title;
        this.btnText = btn;
    }

}
