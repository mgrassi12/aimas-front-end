import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchLocationDialogComponent } from './searchlocationdialog.component';

describe('SearchlocationdialogComponent', () => {
  let component: SearchLocationDialogComponent;
  let fixture: ComponentFixture<SearchLocationDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchLocationDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchLocationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
