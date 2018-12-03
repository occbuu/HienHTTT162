import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule as Ng2Charts } from 'ng2-charts';

import { LineDetailRoutingModule } from './line-detail-routing.module';
import { LineDetailComponent } from './line-detail.component';
import { PageHeaderModule } from './../../shared';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';


@NgModule({
    imports: [
        CommonModule, 
        FormsModule,
        LineDetailRoutingModule, 
        NgbModule.forRoot(), 
        Ng2Charts,       
        PageHeaderModule],
    declarations: [LineDetailComponent]
})
export class LineDetailModule {}
