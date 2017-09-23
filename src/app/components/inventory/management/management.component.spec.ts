import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { APIImports, MaterialImports, MomentModule } from '../../../../test.global';

import { InventoryAPIService } from '../../../services/api/inventory/inventoryapi.service';
import { SharedService } from '../../../services/shared/shared.service';
import { InventoryManagementComponent } from './management.component';

describe('ManagementComponent', () => {
    let component: InventoryManagementComponent;
    let fixture: ComponentFixture<InventoryManagementComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                APIImports,
                MaterialImports,
                MomentModule
            ],
            providers: [
                SharedService,
                InventoryAPIService
            ],
            declarations: [
                InventoryManagementComponent
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
