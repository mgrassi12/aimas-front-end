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

    private hasView: boolean;

    constructor(
        private authAPI: AuthAPIService,
        private viewContainer: ViewContainerRef,
        private templateRef: TemplateRef<any>
    ) {
        this.hasView = false;
        this.authAPI.authChange.subscribe(info => {
            this.updateView();
        })
    }

    private updateView() {
        let show = this.eveluateRole();
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

    private eveluateRole() {
        if (this.role == "!")
            return !this.authAPI.authInfo.IsAuth;
        else if (this.role != null && this.authAPI.authInfo.Role != null)
            return this.authAPI.authInfo.IsAuth && this.role.indexOf(this.authAPI.authInfo.Role) != -1;
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

