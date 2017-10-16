import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditreportComponent } from './addeditreport.component';

describe('AddeditreportComponent', () => {
  let component: AddeditreportComponent;
  let fixture: ComponentFixture<AddeditreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddeditreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddeditreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
