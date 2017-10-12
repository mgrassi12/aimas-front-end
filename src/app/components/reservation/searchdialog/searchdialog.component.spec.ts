import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule, MatDialogRef } from '@angular/material';
import { MaterialModule, InventorySearch } from '../../../../test.global';

import { InventorySearchDialogComponent } from './searchdialog.component';

describe('SearchdialogComponent', () => {
    let component: InventorySearchDialogComponent;
    let fixture: ComponentFixture<InventorySearchDialogComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                MaterialModule,
                MatNativeDateModule,
                FormsModule
            ],
            declarations: [
                InventorySearchDialogComponent
            ],
            providers: [
                { provide: MatDialogRef, useClass: class { } }
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(InventorySearchDialogComponent);
        component = fixture.componentInstance;
        component.search = new InventorySearch();
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});
