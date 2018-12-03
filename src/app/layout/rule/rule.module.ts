import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RuleRoutingModule } from './rule-routing.module';
import { RuleComponent } from './rule.component';
import { PageHeaderModule } from './../../shared';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TreeviewModule } from 'ngx-treeview';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
    imports: [CommonModule, RuleRoutingModule, PageHeaderModule,NgbModule.forRoot(),ModalModule.forRoot()],
    declarations: [RuleComponent]
})
export class RuleModule {}
