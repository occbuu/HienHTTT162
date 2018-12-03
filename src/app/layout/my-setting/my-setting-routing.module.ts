import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MySettingComponent } from './my-setting.component';

const routes: Routes = [
    {
        path: '',
        component: MySettingComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MySettingRoutingModule {}
