import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonImports, DialogProvider, LoccalProvider, Location } from '../../../../test.global';

import { AddEditLocationDialogComponent } from './addeditlocationdialog.component';

describe('AddEditLocationDialogComponent', () => {
    let component: AddEditLocationDialogComponent;
    let fixture: ComponentFixture<AddEditLocationDialogComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                CommonImports
            ],
            declarations: [
                AddEditLocationDialogComponent
            ],
            providers: [
                DialogProvider,
                LoccalProvider
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AddEditLocationDialogComponent);
        component = fixture.componentInstance;
        component.location = new Location();
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
