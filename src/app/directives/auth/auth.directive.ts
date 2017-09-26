import {
    Directive,
    ViewContainerRef,
    TemplateRef,
    Input,
    Output,
    NgModule,
    ElementRef,
    EventEmitter
} from '@angular/core';

import { Subscription } from 'rxjs/Subscription';

import { AuthAPIService } from '../../services/api/auth/authapi.service';


@Directive({
    selector: '[showAuth]'
})
export class ShowAuthDirective {

    private subcription: Subscription;

    private _role: string;
    @Input("showAuth") set role(role: string) {
        this._role = role;
        this.updateView();
    }
    get role() {
        return this._role;
    }

    private hasView: boolean;

    constructor(
        private authAPI: AuthAPIService,
        private viewContainer: ViewContainerRef,
        private templateRef: TemplateRef<any>
    ) {
        this.hasView = false;
        this.subcription = this.authAPI.authChange.subscribe(info => {
            this.updateView();
        })
    }

    private updateView() {
        let show = this.eveluate();
        if (show && !this.hasView) {
            // If condition is true add template to DOM
            this.viewContainer.createEmbeddedView(this.templateRef);
            this.hasView = true;
        } else if (!show && this.hasView) {
            // Else remove template from DOM
            this.viewContainer.clear();
            this.hasView = false;
        }
    }

    private eveluate() {
        if (this.role == "!")
            return !this.authAPI.authInfo.IsAuth;
        else if (this.role != null && this.authAPI.authInfo.Role != null)
            return this.authAPI.authInfo.IsAuth && this.role.indexOf(this.authAPI.authInfo.Role) != -1;
        else
            return this.authAPI.authInfo.IsAuth;
    }

}

@Directive({ selector: '[authReady]' })
export class AuthReadyDirective {

    @Output("authReady") private callback: EventEmitter<void>;

    constructor(private authAPI: AuthAPIService, el: ElementRef) {
        this.callback = new EventEmitter<void>();
        this.authAPI.authReady.then(() => {
            this.callback.emit();
        })
    }
}


@NgModule({
    declarations: [
        ShowAuthDirective,
        AuthReadyDirective
    ],
    exports: [
        ShowAuthDirective,
        AuthReadyDirective
    ]
})
export class AuthModule { }

