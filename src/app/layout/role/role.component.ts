import { Component, OnInit } from '@angular/core';
import { TreeviewItem, TreeviewConfig } from 'ngx-treeview';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-role',
    templateUrl: './role.component.html',
    styleUrls: ['./role.component.scss'],
    animations: [routerTransition()]
})
export class RoleComponent implements OnInit {
    public items = new TreeviewItem({
        text: 'IT', value: 9, children: [
            {
                text: 'Programming', value: 91, children: [{
                    text: 'Frontend', value: 911, children: [
                        { text: 'Angular 1', value: 9111 },
                        { text: 'Angular 2', value: 9112 },
                        { text: 'ReactJS', value: 9113 }
                    ]
                }, {
                    text: 'Backend', value: 912, children: [
                        { text: 'C#', value: 9121 },
                        { text: 'Java', value: 9122 },
                        { text: 'Python', value: 9123, checked: false }
                    ]
                }]
            },
            {
                text: 'Networking', value: 92, children: [
                    { text: 'Internet', value: 921 },
                    { text: 'Security', value: 922 }
                ]
            }
        ]
     });
    constructor() {}
   
    
    ngOnInit() {}
}
