import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditUserDialogComponent } from './addedituserdialog.component';

describe('AddedituserdialogComponent', () => {
  let component: AddEditUserDialogComponent;
  let fixture: ComponentFixture<AddEditUserDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditUserDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditUserDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
