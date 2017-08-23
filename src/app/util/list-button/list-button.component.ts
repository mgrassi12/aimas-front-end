import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'md-list-button',
    templateUrl: './list-button.component.html',
    styleUrls: ['./list-button.component.css']
})
export class ListButtonComponent implements OnInit {

    @Input("Icon") public icon: string;
    @Input("Route") public route: string;

    @Output("btn-click") btnClick = new EventEmitter();

    constructor() { }

    ngOnInit() {
    }

    public hasIcon(): boolean {
        return this.icon != null && this.icon != "";
    }

    public hasRoute(): boolean {
        return this.route != null && this.route != "";
    }

    public onBTNClick($event) {
        this.btnClick.emit($event);
    }

}
