import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrordetailComponent } from './errordetail.component';

const routes: Routes = [
    {
        path: '', component: ErrordetailComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class  ErrordetailRoutingModule {
}
