import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnnounceTemplateComponent } from './announce-template.component';

const routes: Routes = [
    {
        path: '',
        component: AnnounceTemplateComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AnnounceTemplateRoutingModule {}
