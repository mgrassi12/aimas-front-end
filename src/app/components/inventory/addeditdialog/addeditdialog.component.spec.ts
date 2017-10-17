import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonImports, DialogProvider, APIImports, APIProviders, LoccalProvider, Inventory } from '../../../../test.global';

import { InventoryAddEditDialogComponent } from './addeditdialog.component';

describe('InventoryAddEditDialogComponent', () => {
    let component: InventoryAddEditDialogComponent;
    let fixture: ComponentFixture<InventoryAddEditDialogComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                CommonImports,
                APIImports
            ],
            declarations: [
                InventoryAddEditDialogComponent
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
        fixture = TestBed.createComponent(InventoryAddEditDialogComponent);
        component = fixture.componentInstance;
        component.inventory = new Inventory();
        component.locations = [];
        component.setText("Test", "Test");
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});
