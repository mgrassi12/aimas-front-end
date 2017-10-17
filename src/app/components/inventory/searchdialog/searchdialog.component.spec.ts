import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonImports, DialogProvider, InventorySearch, LoccalProvider, APIImports, APIProviders } from '../../../../test.global';

import { InventorySearchDialogComponent } from './searchdialog.component';

describe('SearchdialogComponent', () => {
    let component: InventorySearchDialogComponent;
    let fixture: ComponentFixture<InventorySearchDialogComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                CommonImports,
                APIImports
            ],
            declarations: [
                InventorySearchDialogComponent
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
        fixture = TestBed.createComponent(InventorySearchDialogComponent);
        component = fixture.componentInstance;
        component.search = new InventorySearch();
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});
