import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonImports, DialogProvider, APIImports, APIProviders, LoccalProvider, Inventory } from '../../../../test.global';

import { InventoryManagementComponent } from './management.component';

describe('InventoryManagementComponent', () => {
    let component: InventoryManagementComponent;
    let fixture: ComponentFixture<InventoryManagementComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                CommonImports,
                APIImports
            ],
            declarations: [
                InventoryManagementComponent
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
        fixture = TestBed.createComponent(InventoryManagementComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});
