import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationManagementComponent } from './management.component';

describe('ManagementComponent', () => {
  let component: ReservationManagementComponent;
  let fixture: ComponentFixture<ReservationManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservationManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
