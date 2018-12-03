import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule as Ng2Charts } from 'ng2-charts';

import { ProductReportRoutingModule } from './product-report-routing.module';
import { ProductReportComponent } from './product-report.component';
import { PageHeaderModule } from '../../shared';

@NgModule({
    imports: [CommonModule, Ng2Charts, ProductReportRoutingModule, PageHeaderModule],
    declarations: [ProductReportComponent]
})
export class ProductReportModule {}
