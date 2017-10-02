import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MdDialogRef } from '@angular/material';
import { MaterialModule, Providers, Inventory } from '../../../../test.global';

import { InventoryAddEditDialogComponent } from './addeditdialog.component';

describe('AddeditdialogComponent', () => {
    let component: InventoryAddEditDialogComponent;
    let fixture: ComponentFixture<InventoryAddEditDialogComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                MaterialModule,
                FormsModule
            ],
            declarations: [
                InventoryAddEditDialogComponent
            ],
            providers: [
                { provide: MdDialogRef, useClass: class { } },
                Providers
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(InventoryAddEditDialogComponent);
        component = fixture.componentInstance;
        component.inventory = new Inventory();
        component.setText("Test", "Test");
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});
