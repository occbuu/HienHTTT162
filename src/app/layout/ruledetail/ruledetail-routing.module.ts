import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RuledetailComponent } from './ruledetail.component';

const routes: Routes = [
    {
        path: '', component: RuledetailComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class  RuledetailRoutingModule {
}
