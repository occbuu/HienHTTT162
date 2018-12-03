import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LineDetailComponent } from './line-detail.component';

const routes: Routes = [
    {
        path: '',
        component: LineDetailComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LineDetailRoutingModule {}
