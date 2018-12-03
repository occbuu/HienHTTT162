import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotiNewRoutingModule } from './noti-new-routing.module';
import { NotiNewComponent } from './noti-new.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [CommonModule, NotiNewRoutingModule, PageHeaderModule],
    declarations: [NotiNewComponent]
})
export class NotiNewModule {}
