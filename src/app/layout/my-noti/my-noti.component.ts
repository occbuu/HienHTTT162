import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-my-noti',
    templateUrl: './my-noti.component.html',
    styleUrls: ['./my-noti.component.scss'],
    animations: [routerTransition()]
})
export class MyNotiComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
