import { Component, OnInit } from '@angular/core';

import { InventorySearch } from '../../../models/inventory';

@Component({
  selector: 'app-searchdialog',
  templateUrl: './searchdialog.component.html',
  styleUrls: ['./searchdialog.component.css']
})
export class InventorySearchDialogComponent implements OnInit {

    public search: InventorySearch;

  constructor() { }

  ngOnInit() {
  }

}
