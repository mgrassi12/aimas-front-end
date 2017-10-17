import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonImports, APIImports, APIProviders } from '../../../../test.global';

import { UserManagementComponent } from './usermanagement.component';

describe('UsermanagementComponent', () => {
    let component: UserManagementComponent;
    let fixture: ComponentFixture<UserManagementComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [CommonImports, APIImports],
            declarations: [UserManagementComponent],
            providers: [APIProviders]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(UserManagementComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
