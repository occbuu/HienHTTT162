import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotiHisRoutingModule } from './noti-his-routing.module';
import { NotiHisComponent } from './noti-his.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [CommonModule,  NotiHisRoutingModule, PageHeaderModule],
    declarations: [ NotiHisComponent]
})
export class  NotiHisModule {}
