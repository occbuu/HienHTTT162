import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-rule',
    templateUrl: './rule.component.html',
    styleUrls: ['./rule.component.scss'],
    animations: [routerTransition()]
})
export class RuleComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
