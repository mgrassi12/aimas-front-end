import { Component, OnInit } from '@angular/core';

import { UserSearch } from '../../../models/User';

@Component({
  selector: 'app-usersearchdialog',
  templateUrl: './usersearchdialog.component.html',
  styleUrls: ['./usersearchdialog.component.css']
})
export class UserSearchDialogComponent implements OnInit {

    public search: UserSearch;

  constructor() { }

  ngOnInit() {
  }

}
