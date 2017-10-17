import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonImports, DialogProvider, RegisterModel } from '../../../../test.global';

import { UserAddEditDialogComponent } from './addedituserdialog.component';

describe('UserAddEditDialogComponent', () => {
    let component: UserAddEditDialogComponent;
    let fixture: ComponentFixture<UserAddEditDialogComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [...CommonImports],
            declarations: [UserAddEditDialogComponent],
            providers: [DialogProvider]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(UserAddEditDialogComponent);
        component = fixture.componentInstance;
        component.user = new RegisterModel();
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
