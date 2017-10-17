import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonImports, DialogProvider, APIImports, APIProviders, LoccalProvider } from '../../../../test.global';
import { InventoryAPIService } from '../../../services/api/inventory/inventoryapi.service';
import { SharedService } from '../../../services/shared/shared.service';
import { InventoryDashboardComponent } from './dashboard.component';

describe('InventoryDashboardComponent', () => {
    let component: InventoryDashboardComponent;
    let fixture: ComponentFixture<InventoryDashboardComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                CommonImports,
                APIImports
            ],
            declarations: [
                InventoryDashboardComponent
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
        fixture = TestBed.createComponent(InventoryDashboardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});
