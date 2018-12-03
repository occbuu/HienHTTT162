import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard' },
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'errortype', loadChildren: './errortype/errortype.module#ErrortypeModule' },
            { path: 'errordetail', loadChildren: './errordetail/errordetail.module#ErrordetailModule' },
            { path: 'product', loadChildren: './product/product.module#ProductModule' },
            { path: 'productdetail', loadChildren: './productdetail/productdetail.module#ProductdetailModule' },
            { path: 'prorpt', loadChildren: './product-report/product-report.module#ProductReportModule' },
            { path: 'errrpt', loadChildren: './error-report/error-report.module#ErrorReportModule' },
            { path: 'addline', loadChildren: './line-new/line-new.module#LineNewModule' },
            { path: 'viewline', loadChildren: './line-view/line-view.module#LineViewModule' },
            { path: 'linedetail', loadChildren: './line-detail/line-detail.module#LineDetailModule' },
            { path: 'rule', loadChildren: './rule/rule.module#RuleModule' },
            { path: 'ruledetail', loadChildren: './ruledetail/ruledetail.module#RuledetailModule' },
            { path: 'announce', loadChildren: './announce-template/announce-template.module#AnnounceTemplateModule' },
            { path: 'mynoti', loadChildren: './my-noti/my-noti.module#MyNotiModule' },
            { path: 'notidetail', loadChildren: './noti-detail/noti-detail.module#NotiDetailModule' },
            { path: 'notiadd', loadChildren: './noti-new/noti-new.module#NotiNewModule' },
            { path: 'notiview', loadChildren: './noti-his/noti-his.module#NotiHisModule' },
            { path: 'user', loadChildren: './user/user.module#UserModule' },
            { path: 'userrole', loadChildren: './role/role.module#RoleModule' },
            { path: 'syssetting', loadChildren: './setting/setting.module#SettingModule' },
            { path: 'profile', loadChildren: './profile/profile.module#ProfileModule' },
            { path: 'changepass', loadChildren: './changepass/changepass.module#ChangepassModule' },
            { path: 'mysetting', loadChildren: './my-setting/my-setting.module#MySettingModule' },
            { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
            { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
            { path: 'forms', loadChildren: './form/form.module#FormModule' },
            { path: 'bs-element', loadChildren: './bs-element/bs-element.module#BsElementModule' },
            { path: 'grid', loadChildren: './grid/grid.module#GridModule' },
            { path: 'components', loadChildren: './bs-component/bs-component.module#BsComponentModule' },
            { path: 'blank-page', loadChildren: './blank-page/blank-page.module#BlankPageModule' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
