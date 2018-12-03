import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { PageHeaderModule } from './../../shared';
import { ModalModule } from 'ngx-bootstrap/modal';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [CommonModule, 
            UserRoutingModule,
         PageHeaderModule,
         ModalModule.forRoot(), 
        NgbModule.forRoot(), ],
    declarations: [UserComponent]
})
export class UserModule {}
