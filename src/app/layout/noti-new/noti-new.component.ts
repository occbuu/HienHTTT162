import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-noti-new',
    templateUrl: './noti-new.component.html',
    styleUrls: ['./noti-new.component.scss'],
    animations: [routerTransition()]
})
export class NotiNewComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
