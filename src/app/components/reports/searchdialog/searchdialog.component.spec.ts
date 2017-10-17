import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonImports, DialogProvider, LoccalProvider, ReportSearch } from '../../../../test.global';

import { ReportSearchDialogComponent } from './searchdialog.component';

describe('ReportSearchDialogComponent', () => {
    let component: ReportSearchDialogComponent;
    let fixture: ComponentFixture<ReportSearchDialogComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                CommonImports
            ],
            declarations: [
                ReportSearchDialogComponent
            ],
            providers: [
                DialogProvider,
                LoccalProvider
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ReportSearchDialogComponent);
        component = fixture.componentInstance;
        component.search = new ReportSearch();
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
