import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonImports, DialogProvider, LoccalProvider, Reservation, APIImports, APIProviders } from '../../../../test.global';

import { ReservationAddEditDialogComponent } from './addeditdialog.component';

describe('ReservationAddEditDialogComponent', () => {
    let component: ReservationAddEditDialogComponent;
    let fixture: ComponentFixture<ReservationAddEditDialogComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                CommonImports,
                APIImports
            ],
            declarations: [
                ReservationAddEditDialogComponent
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
        fixture = TestBed.createComponent(ReservationAddEditDialogComponent);
        component = fixture.componentInstance;
        component.reservation = new Reservation();
        component.locations = [];
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
