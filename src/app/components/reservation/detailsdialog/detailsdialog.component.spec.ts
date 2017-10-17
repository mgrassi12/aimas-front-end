import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonImports, DialogProvider, LoccalProvider } from '../../../../test.global';

import { ReservationDetailsDialogComponent } from './detailsdialog.component';

describe('ReservationDetailsDialogComponent', () => {
    let component: ReservationDetailsDialogComponent;
    let fixture: ComponentFixture<ReservationDetailsDialogComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                CommonImports,
            ],
            declarations: [
                ReservationDetailsDialogComponent
            ],
            providers: [
                DialogProvider,
                LoccalProvider,
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ReservationDetailsDialogComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
