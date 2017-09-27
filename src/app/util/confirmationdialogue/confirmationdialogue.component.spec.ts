import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationdialogueComponent } from './confirmationdialogue.component';

describe('ConfirmationdialogueComponent', () => {
  let component: ConfirmationdialogueComponent;
  let fixture: ComponentFixture<ConfirmationdialogueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmationdialogueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmationdialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
