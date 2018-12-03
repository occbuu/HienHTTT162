import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoleRoutingModule } from './role-routing.module';
import { RoleComponent } from './role.component';
import { PageHeaderModule } from './../../shared';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TreeviewModule } from 'ngx-treeview';

@NgModule({
    imports: [CommonModule, 
        RoleRoutingModule, 
        PageHeaderModule,
        ModalModule.forRoot(), 
        TreeviewModule.forRoot(),
        NgbModule.forRoot(),     
    ],
    declarations: [RoleComponent]
})
export class RoleModule {}
