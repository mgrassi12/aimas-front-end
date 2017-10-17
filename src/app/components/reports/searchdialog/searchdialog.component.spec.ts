import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportSearchDialogComponent } from './searchdialog.component';

describe('SearchdialogComponent', () => {
  let component: ReportSearchDialogComponent;
  let fixture: ComponentFixture<ReportSearchDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportSearchDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportSearchDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
