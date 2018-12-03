import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LineViewRoutingModule } from './line-view-routing.module';
import { LineViewComponent } from './line-view.component';
import { PageHeaderModule } from './../../shared';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule, 
        FormsModule,
        LineViewRoutingModule, 
        NgbModule.forRoot(),
        PageHeaderModule
    ],
    declarations: [LineViewComponent]
})
export class LineViewModule {}
