import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationAddEditDialogComponent } from './addeditdialog.component';

describe('AddeditdialogComponent', () => {
  let component: ReservationAddEditDialogComponent;
  let fixture: ComponentFixture<ReservationAddEditDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservationAddEditDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationAddEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
