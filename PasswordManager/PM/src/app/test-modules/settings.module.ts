import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingComponent } from './setting/setting.component';
import { AdminModule } from './admin/admin.module';


@NgModule({
  declarations: [SettingComponent],
  imports: [
    CommonModule,
    SettingsRoutingModule
  ]
})
export class SettingsModule { }
