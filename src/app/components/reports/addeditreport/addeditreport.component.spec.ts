import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonImports, DialogProvider, Report, LoccalProvider, APIImports, APIProviders } from '../../../../test.global';


import { AddEditReportComponent } from './addeditreport.component';

describe('AddEditReportComponent', () => {
    let component: AddEditReportComponent;
    let fixture: ComponentFixture<AddEditReportComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                CommonImports,
                APIImports
            ],
            declarations: [
                AddEditReportComponent
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
        fixture = TestBed.createComponent(AddEditReportComponent);
        component = fixture.componentInstance;
        component.report = new Report();
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
