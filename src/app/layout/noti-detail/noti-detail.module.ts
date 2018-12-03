import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotiDetailRoutingModule } from './noti-detail-routing.module';
import { NotiDetailComponent } from './noti-detail.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [CommonModule, NotiDetailRoutingModule, PageHeaderModule],
    declarations: [NotiDetailComponent]
})
export class NotiDetailModule {}
