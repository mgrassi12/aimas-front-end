import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {CommonImports, APIImports, RouterTestingModule } from '../../../../test.global';

import { LoginComponent } from './login.component';
import { AuthAPIService } from '../../../services/api/auth/authapi.service';
import { SharedService } from '../../../services/shared/shared.service';

describe('LoginComponent', () => {
    let component: LoginComponent;
    let fixture: ComponentFixture<LoginComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                CommonImports,
                RouterTestingModule,
                APIImports
            ],
            providers: [
                AuthAPIService,
                SharedService
            ],
            declarations: [
                LoginComponent
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LoginComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});
