import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LineViewComponent } from './line-view.component';

const routes: Routes = [
    {
        path: '',
        component: LineViewComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LineViewRoutingModule {}
