import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MySettingRoutingModule } from './my-setting-routing.module';
import { MySettingComponent } from './my-setting.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [CommonModule, MySettingRoutingModule, PageHeaderModule],
    declarations: [MySettingComponent]
})
export class MySettingModule {}
