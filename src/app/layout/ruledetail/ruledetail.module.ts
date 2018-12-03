import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RuledetailRoutingModule } from './ruledetail-routing.module';
import { RuledetailComponent } from './ruledetail.component';
import { PageHeaderModule } from './../../shared';
import { FormsModule } from '@angular/forms';
import { CollapseModule, TooltipModule } from 'ngx-bootstrap';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [
        CommonModule, 
        RuledetailRoutingModule, 
        PageHeaderModule,
        ModalModule.forRoot(),  
        NgbModule.forRoot(),           
    ],
    declarations: [RuledetailComponent]
})
export class RuledetailModule {}
