import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AnnounceTemplateRoutingModule } from './announce-template-routing.module';
import { AnnounceTemplateComponent } from './announce-template.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [
        CommonModule, 
        AnnounceTemplateRoutingModule, 
        NgbModule.forRoot(), 
        PageHeaderModule],
    declarations: [AnnounceTemplateComponent]
})
export class AnnounceTemplateModule {}
