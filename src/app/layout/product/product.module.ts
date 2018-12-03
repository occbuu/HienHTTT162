import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { PageHeaderModule } from './../../shared';
import { FormsModule } from '@angular/forms';
import { CollapseModule, TooltipModule } from 'ngx-bootstrap';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [
        CommonModule, 
        ProductRoutingModule,         
        PageHeaderModule,
        ModalModule.forRoot(), 
        NgbModule.forRoot(),     
    ],
    declarations: [
        ProductComponent,         
    ]
})
export class ProductModule {}
