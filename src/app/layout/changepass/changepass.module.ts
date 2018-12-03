import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChangepassRoutingModule } from './changepass-routing.module';
import { ChangepassComponent } from './changepass.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [CommonModule, ChangepassRoutingModule, PageHeaderModule],
    declarations: [ChangepassComponent]
})
export class ChangepassModule {}
