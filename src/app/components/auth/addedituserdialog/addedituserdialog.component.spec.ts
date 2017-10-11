import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAddEditDialogComponent } from './addedituserdialog.component';

describe('AddedituserdialogComponent', () => {
  let component: UserAddEditDialogComponent;
  let fixture: ComponentFixture<UserAddEditDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserAddEditDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAddEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
