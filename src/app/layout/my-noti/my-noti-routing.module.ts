import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyNotiComponent } from './my-noti.component';

const routes: Routes = [
    {
        path: '',
        component: MyNotiComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MyNotiRoutingModule {}
