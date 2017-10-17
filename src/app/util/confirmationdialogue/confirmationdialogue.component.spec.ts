import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonImports, DialogProvider, LoccalProvider } from '../../../test.global';

import { ConfirmationDialogueComponent } from './confirmationdialogue.component';

describe('ConfirmationdialogueComponent', () => {
    let component: ConfirmationDialogueComponent;
    let fixture: ComponentFixture<ConfirmationDialogueComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                CommonImports
            ],
            declarations: [
                ConfirmationDialogueComponent
            ],
            providers: [
                DialogProvider,
                LoccalProvider
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ConfirmationDialogueComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
