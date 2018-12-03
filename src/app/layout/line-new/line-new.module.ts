import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LineNewRoutingModule } from './line-new-routing.module';
import { LineNewComponent } from './line-new.component';
import { PageHeaderModule } from './../../shared';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [
        CommonModule, 
        LineNewRoutingModule,         
        NgbModule.forRoot(),
        FormsModule,
        PageHeaderModule],
    declarations: [LineNewComponent]
})
export class LineNewModule {}
