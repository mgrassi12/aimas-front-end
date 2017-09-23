import { Directive, ViewContainerRef, TemplateRef, Input, NgModule } from '@angular/core';

import { AuthAPIService } from '../../services/api/auth/authapi.service';


@Directive({
    selector: '[showAuth]'
})
export class ShowAuthDirective {

    private _role: string;
    @Input("showAuth") set role(role: string) {
        this._role = role;
        this.updateView();
    }
    get role() {
        return this._role;
    }

    constructor(
        private authAPI: AuthAPIService,
        private viewContainer: ViewContainerRef,
        private templateRef: TemplateRef<any>
    ) {
        this.role = null;
        this.authAPI.authChange.subscribe(info => {
            this.updateView();
        })
    }

    private updateView() {
        if (this.eveluateRole()) {
            // If condition is true add template to DOM
            this.viewContainer.createEmbeddedView(this.templateRef);
        } else {
            // Else remove template from DOM
            this.viewContainer.clear();
        }
    }

    private eveluateRole() {
        if (this.role != null && this.authAPI.authInfo.Role != null)
            return this.authAPI.authInfo.IsAuth && this.authAPI.authInfo.Role == this.role;
        else
            return this.authAPI.authInfo.IsAuth;

    }

}


@NgModule({
    declarations: [
        ShowAuthDirective
    ],
    exports: [
        ShowAuthDirective
    ]
})
export class AuthModule { }

