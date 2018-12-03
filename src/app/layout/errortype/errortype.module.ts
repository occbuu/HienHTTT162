import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrortypeRoutingModule } from './errortype-routing.module';
import { ErrortypeComponent } from './errortype.component';
import { PageHeaderModule } from './../../shared';
import { FormsModule } from '@angular/forms';
import { CollapseModule, TooltipModule } from 'ngx-bootstrap';
import { ModalModule } from 'ngx-bootstrap/modal';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [
        CommonModule, 
        ErrortypeRoutingModule,         
        PageHeaderModule,
        ModalModule.forRoot(), 
        NgbModule.forRoot(),     
    ],
    declarations: [
        ErrortypeComponent,         
    ]
})
export class ErrortypeModule {}
