import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-noti-his',
    templateUrl: './noti-his.component.html',
    styleUrls: ['./noti-his.component.scss'],
    animations: [routerTransition()]
})
export class NotiHisComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
