import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditLocationDialogComponent } from './addeditlocationdialog.component';

describe('AddeditlocationdialogComponent', () => {
  let component: AddEditLocationDialogComponent;
  let fixture: ComponentFixture<AddEditLocationDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditLocationDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditLocationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
