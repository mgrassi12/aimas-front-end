import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { APIImports, MaterialImports } from '../../../../test.global';

import { InventoryAPIService } from '../../../services/api/inventory/inventoryapi.service';
import { SharedService } from '../../../services/shared/shared.service';
import { InventoryDashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
    let component: InventoryDashboardComponent;
    let fixture: ComponentFixture<InventoryDashboardComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                APIImports,
                MaterialImports
            ],
            providers: [
                InventoryAPIService,
                SharedService
            ],
            declarations: [
                InventoryDashboardComponent
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(InventoryDashboardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});
