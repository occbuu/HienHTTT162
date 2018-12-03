import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductdetailRoutingModule } from './productdetail-routing.module';
import { ProductdetailComponent } from './productdetail.component';
import { PageHeaderModule } from './../../shared';
import { FormsModule } from '@angular/forms';
import { CollapseModule, TooltipModule } from 'ngx-bootstrap';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [
        CommonModule, 
        ProductdetailRoutingModule, 
        PageHeaderModule,
        ModalModule.forRoot(),  
        NgbModule.forRoot(),           
    ],
    declarations: [ProductdetailComponent]
})
export class ProductdetailModule {}
