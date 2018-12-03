import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-my-setting',
    templateUrl: './my-setting.component.html',
    styleUrls: ['./my-setting.component.scss'],
    animations: [routerTransition()]
})
export class MySettingComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
