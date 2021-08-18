import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  DxDataGridModule, DxDropDownBoxModule, DxLookupModule, DxSelectBoxModule,
  DxPopupModule, 
  DxTextBoxModule,
  DxButtonModule,
  DxMenuModule} from 'devextreme-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LookupTestComponent } from './lookup-test/lookup-test.component';
import { PasswordListComponent } from './PasswordList/PasswordList.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { SignupComponent } from './Authorization/signup/signup.component';
import { SigninComponent } from './Authorization/signin/signin.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdduserComponent } from './adduser/adduser.component';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [				
    AppComponent,
    LookupTestComponent,
    PasswordListComponent,
    LayoutComponent,
    HeaderComponent,
    SignupComponent,
    SigninComponent,
      PagenotfoundComponent,
      DashboardComponent,
      AdduserComponent,
      MenuComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DxLookupModule,
    DxDropDownBoxModule,
    DxDataGridModule,
    DxSelectBoxModule,
    DxPopupModule,
    DxTextBoxModule,
    DxButtonModule,
    DxMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
