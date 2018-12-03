import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrordetailRoutingModule } from './errordetail-routing.module';
import { ErrordetailComponent } from './errordetail.component';
import { PageHeaderModule } from './../../shared';
import { FormsModule } from '@angular/forms';
import { CollapseModule, TooltipModule } from 'ngx-bootstrap';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
    imports: [
        CommonModule, 
        ErrordetailRoutingModule, 
        PageHeaderModule,
        ModalModule.forRoot(),        
    ],
    declarations: [ErrordetailComponent]
})
export class ErrordetailModule {}
