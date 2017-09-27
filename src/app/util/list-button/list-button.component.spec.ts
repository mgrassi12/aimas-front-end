import { async, TestBed } from '@angular/core/testing';
import { MaterialModule } from '../../../test.global';
import { RouterTestingModule } from '@angular/router/testing';

import { ListButtonComponent } from './list-button.component';

describe("ListButtonComponent", () => {
    let component: ListButtonComponent;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                MaterialModule,
                RouterTestingModule
            ],
            declarations: [
                ListButtonComponent
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        let fixture = TestBed.createComponent(ListButtonComponent);
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
