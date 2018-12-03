import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotiNewComponent } from './noti-new.component';

const routes: Routes = [
    {
        path: '',
        component: NotiNewComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NotiNewRoutingModule {}
