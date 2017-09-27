import { Component } from "@angular/core";
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { APIImports, AuthAPIService, SharedService } from '../../../test.global';

import { AuthShowDirective, AuthReadyDirective } from './auth.directive';


@Component({
    template: '<div *showAuth></div>'
})
class TestComponent1 {
}

describe('ShowAuthDirective', () => {
    let component: TestComponent1;
    let fixture: ComponentFixture<TestComponent1>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                APIImports
            ],
            providers: [
                AuthAPIService,
                SharedService
            ],
            declarations: [
                AuthShowDirective,
                TestComponent1
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent1);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});


@Component({
    template: '<div (authReady)="test()"></div>'
})
class TestComponent2 {
    public test() {
        console.debug("Test Callback");
    }
}

describe('ShowAuthDirective', () => {
    let component: TestComponent2;
    let fixture: ComponentFixture<TestComponent2>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                APIImports
            ],
            providers: [
                AuthAPIService,
                SharedService
            ],
            declarations: [
                AuthReadyDirective,
                TestComponent2
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent2);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});
