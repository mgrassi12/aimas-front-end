import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addedituserdialog',
  templateUrl: './addedituserdialog.component.html',
  styleUrls: ['./addedituserdialog.component.css']
})
export class AddEditUserDialogComponent implements OnInit {

    public title: string;
    public btnText: string;

    constructor() { }

    ngOnInit() {
    }

    public setText(title: string, btn: string) {
        this.title = title;
        this.btnText = btn;
    }

}
