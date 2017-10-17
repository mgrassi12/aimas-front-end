import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonImports, DialogProvider, APIImports, APIProviders, LoccalProvider, ReservationSearch } from '../../../../test.global';

import { ReservationSearchDialogComponent } from './searchdialog.component';

describe('SearchdialogComponent', () => {
    let component: ReservationSearchDialogComponent;
    let fixture: ComponentFixture<ReservationSearchDialogComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                CommonImports,
                APIImports
            ],
            declarations: [
                ReservationSearchDialogComponent
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
        fixture = TestBed.createComponent(ReservationSearchDialogComponent);
        component = fixture.componentInstance;
        component.search = new ReservationSearch();
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});
