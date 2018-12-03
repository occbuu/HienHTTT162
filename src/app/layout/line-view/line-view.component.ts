import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-line-view',
    templateUrl: './line-view.component.html',
    styleUrls: ['./line-view.component.scss'],
    animations: [routerTransition()]
})
export class LineViewComponent implements OnInit {
    public isCollapsed = true;
    constructor() {}

    ngOnInit() {}
}
