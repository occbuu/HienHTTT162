import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-noti-detail',
    templateUrl: './noti-detail.component.html',
    styleUrls: ['./noti-detail.component.scss'],
    animations: [routerTransition()]
})
export class NotiDetailComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
