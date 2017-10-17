import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonImports, DialogProvider, LoccalProvider, LocationSearch } from '../../../../test.global';

import { SearchLocationDialogComponent } from './searchlocationdialog.component';

describe('SearchlocationdialogComponent', () => {
    let component: SearchLocationDialogComponent;
    let fixture: ComponentFixture<SearchLocationDialogComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                CommonImports
            ],
            declarations: [
                SearchLocationDialogComponent
            ],
            providers: [
                DialogProvider,
                LoccalProvider
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SearchLocationDialogComponent);
        component = fixture.componentInstance;
        component.search = new LocationSearch();
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
