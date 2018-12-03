import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotiDetailComponent } from './noti-detail.component';

const routes: Routes = [
    {
        path: '',
        component: NotiDetailComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NotiDetailRoutingModule {}
