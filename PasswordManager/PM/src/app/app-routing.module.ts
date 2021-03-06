import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdduserComponent } from './adduser/adduser.component';
import { AuthService } from './Authorization/auth.service';
import { SigninComponent } from './Authorization/signin/signin.component';
import { SignupComponent } from './Authorization/signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutComponent } from './layout/layout.component';
import { FlexboxLearnComponent } from './Learning/flexbox-learn/flexbox-learn.component';
import { MenuComponent } from './menu/menu.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'signup', component: SignupComponent },
      { path: 'signin', component: SigninComponent },
      { path: 'dashboard', component: DashboardComponent },
      {path: 'menu', component: MenuComponent},
      { path: 'adduser', component: AdduserComponent },
      {
        path: 'settings',
        loadChildren: () =>
          import('./test-modules/settings.module').then(
            (m) => m.SettingsModule
          ),
      },
      {path: 'flex', component: FlexboxLearnComponent}
    ],
  },

  { path: '**', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
