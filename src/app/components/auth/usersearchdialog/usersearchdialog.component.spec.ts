import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonImports, DialogProvider, UserSearch } from '../../../../test.global';

import { UserSearchDialogComponent } from './usersearchdialog.component';

describe('UserSearchDialogComponent', () => {
    let component: UserSearchDialogComponent;
    let fixture: ComponentFixture<UserSearchDialogComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [CommonImports],
            declarations: [UserSearchDialogComponent],
            providers: [DialogProvider]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(UserSearchDialogComponent);
        component = fixture.componentInstance;
        component.search = new UserSearch();
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
