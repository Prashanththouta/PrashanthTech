import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingComponent } from './setting/setting.component';

const routes: Routes = [
  { path: '', component: SettingComponent },
  { path: 'admin', loadChildren: () => import("./admin/admin.module").then(m => { return m.AdminModule }) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
