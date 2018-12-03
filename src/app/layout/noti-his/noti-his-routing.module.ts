import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotiHisComponent } from './noti-his.component';

const routes: Routes = [
    {
        path: '',
        component: NotiHisComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NotiHisRoutingModule {}
