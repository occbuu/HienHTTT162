import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LineNewComponent } from './line-new.component';

const routes: Routes = [
    {
        path: '',
        component: LineNewComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LineNewRoutingModule {}
