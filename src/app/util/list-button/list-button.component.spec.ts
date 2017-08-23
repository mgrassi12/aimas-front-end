import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListButtonComponent } from './list-button.component';

describe('ListButtonComponent', () => {
  let component: ListButtonComponent;
  let fixture: ComponentFixture<ListButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
