import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';


@Component({
    selector: 'app-line-new',
    templateUrl: './line-new.component.html',
    styleUrls: ['./line-new.component.scss'],
    animations: [routerTransition()]
})
export class LineNewComponent implements OnInit {
    public isCollapsed = false;
    StartingDate: any;
    DeadlineDate: any;
    constructor() {}

    ngOnInit() {}
}
