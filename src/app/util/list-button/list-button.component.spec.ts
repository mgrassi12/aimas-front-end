import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@angular/material';

import { ListButtonComponent } from './list-button.component';

describe("ListButtonComponent", () => {
    let component: ListButtonComponent;
    let fixture: ComponentFixture<ListButtonComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                MaterialModule,
                FlexLayoutModule
            ],
            declarations: [
                ListButtonComponent
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ListButtonComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should be created", () => {
        expect(component).toBeTruthy();
    });

    it("shouldn't have an icon", () => {
        expect(component.hasIcon()).toEqual(false);
    });

    it("shouldn't have an route", () => {
        expect(component.hasRoute()).toEqual(false);
    });
});
