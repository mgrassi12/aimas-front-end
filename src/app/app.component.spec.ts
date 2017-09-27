import { Component } from "@angular/core";
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { APIImports, MaterialModule, RouterTestingModule, AuthModule } from '../test.global';

import { AppComponent } from './app.component';
import { ListButtonComponent } from './util/list-button/list-button.component';
import { AuthAPIService } from './services/api/auth/authapi.service';
import { SharedService } from './services/shared/shared.service';

@Component({
    template: 'Home'
})
export class LoginComponent {
}

describe("AppComponent", () => {
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule.withRoutes([{ path: "auth/login", component: LoginComponent }]),
                APIImports,
                MaterialModule,
                AuthModule
            ],
            providers: [
                AuthAPIService,
                SharedService
            ],
            declarations: [
                ListButtonComponent,
                AppComponent,
                LoginComponent
            ],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create the app", () => {
        expect(component).toBeTruthy();
    });

    it("should have as title 'AIMAS'", () => {
        expect(component.title).toEqual("AIMAS");
    });

    //it("should render title in a h1 tag", async(() => {
    //    const fixture = TestBed.createComponent(AppComponent);
    //    fixture.detectChanges();
    //    const compiled = fixture.debugElement.nativeElement;
    //    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
    //}));
});
