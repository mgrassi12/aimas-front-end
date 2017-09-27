import { Component, OnInit } from '@angular/core';

import { DateFormat } from '../../../services/shared/shared.service';
import { Inventory } from '../../../models/inventory';

@Component({
    selector: 'app-addeditdialog',
    templateUrl: './addeditdialog.component.html',
    styleUrls: ['./addeditdialog.component.css']
})
export class AddEditDialogComponent implements OnInit {

    public get DateFormat() { return DateFormat; }

    public inventory: Inventory;
    public title: string
    public btnText: string

    constructor() {
    }

    ngOnInit() {
    }

    public setText(title: string, btn: string) {
        this.title = title;
        this.btnText = btn;
    }


    public get now() { return new Date(); }

}
