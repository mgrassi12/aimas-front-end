import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule, MatDialogRef } from '@angular/material';
import { MaterialModule, InventorySearch } from '../../../../test.global';

import { ReservationSearchDialogComponent } from './searchdialog.component';
import { ReservationSearch } from "../../../models/reservation";

describe('SearchdialogComponent', () => {
    let component: ReservationSearchDialogComponent;
    let fixture: ComponentFixture<ReservationSearchDialogComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                MaterialModule,
                MatNativeDateModule,
                FormsModule
            ],
            declarations: [
                ReservationSearchDialogComponent
            ],
            providers: [
                { provide: MatDialogRef, useClass: class { } }
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ReservationSearchDialogComponent);
        component = fixture.componentInstance;
        component.search = new ReservationSearch();
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});
