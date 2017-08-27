import { TestBed, async } from '@angular/core/testing';
import { APIImports, MaterialImports, RouterTestingModule } from '../test.global';

import { AppComponent } from './app.component';
import { ListButtonComponent } from './util/list-button/list-button.component';
import { AuthAPIService } from './services/api/auth/authapi.service';
import { SharedService } from './services/shared/shared.service';


describe("AppComponent", () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                ...APIImports,
                ...MaterialImports
            ],
            providers: [
                AuthAPIService,
                SharedService
            ],
            declarations: [
                ListButtonComponent,
                AppComponent
            ],
        }).compileComponents();
    }));

    it("should create the app", async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));

    it("should have as title 'app'", async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app.title).toEqual("app");
    }));

    //it("should render title in a h1 tag", async(() => {
    //    const fixture = TestBed.createComponent(AppComponent);
    //    fixture.detectChanges();
    //    const compiled = fixture.debugElement.nativeElement;
    //    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
    //}));
});
