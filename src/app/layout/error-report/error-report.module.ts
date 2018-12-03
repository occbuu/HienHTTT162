import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule as Ng2Charts } from 'ng2-charts';

import { ErrorReportRoutingModule } from './error-report-routing.module';
import { ErrorReportComponent } from './error-report.component';
import { PageHeaderModule } from '../../shared';

@NgModule({
    imports: [CommonModule, Ng2Charts, ErrorReportRoutingModule, PageHeaderModule],
    declarations: [ErrorReportComponent]
})
export class ErrorReportModule {}
