import { Component, OnInit } from '@angular/core';


import { Report } from "../../../models/report";

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

    constructor() {

    }

    ngOnInit() {

    }

    public setText(title: string, btn: string) {
        this.title = title;
        this.btnText = btn;
    }

}
