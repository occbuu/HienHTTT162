import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyNotiRoutingModule } from './my-noti-routing.module';
import { MyNotiComponent } from './my-noti.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [CommonModule, MyNotiRoutingModule, PageHeaderModule],
    declarations: [MyNotiComponent]
})
export class MyNotiModule {}
