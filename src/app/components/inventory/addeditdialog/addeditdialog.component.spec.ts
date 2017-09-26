import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MdDialogRef } from '@angular/material';
import { MaterialImports, MaterialProviders, Inventory } from '../../../../test.global';

import { AddEditDialogComponent } from './addeditdialog.component';

describe('AddeditdialogComponent', () => {
    let component: AddEditDialogComponent;
    let fixture: ComponentFixture<AddEditDialogComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                MaterialImports,
                FormsModule
            ],
            declarations: [
                AddEditDialogComponent
            ],
            providers: [
                { provide: MdDialogRef, useClass: class { } },
                ...MaterialProviders
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AddEditDialogComponent);
        component = fixture.componentInstance;
        component.inventory = new Inventory();
        component.setText("Test", "Test");
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});