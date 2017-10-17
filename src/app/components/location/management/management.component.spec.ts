import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonImports, DialogProvider, APIImports, APIProviders, LoccalProvider } from '../../../../test.global';

import { LocationManagementComponent } from './management.component';

describe('LocationManagementComponent', () => {
    let component: LocationManagementComponent;
    let fixture: ComponentFixture<LocationManagementComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                CommonImports,
                APIImports
            ],
            declarations: [
                LocationManagementComponent
            ],
            providers: [
                DialogProvider,
                LoccalProvider,
                APIProviders
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LocationManagementComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
