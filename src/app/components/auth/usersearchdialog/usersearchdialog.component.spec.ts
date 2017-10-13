import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSearchDialogComponent } from './usersearchdialog.component';

describe('UsersearchdialogComponent', () => {
  let component: UserSearchDialogComponent;
  let fixture: ComponentFixture<UserSearchDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSearchDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSearchDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
