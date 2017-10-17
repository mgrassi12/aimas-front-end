import { Component, OnInit } from '@angular/core';

import { ReportSearch } from '../../../models/Report';

@Component({
  selector: 'app-searchdialog',
  templateUrl: './searchdialog.component.html',
  styleUrls: ['./searchdialog.component.css']
})
export class ReportSearchDialogComponent implements OnInit {

    public search: ReportSearch;

  constructor() { }

  ngOnInit() {
  }

}
