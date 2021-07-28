import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DxDataGridModule, DxDropDownBoxModule, DxLookupModule } from 'devextreme-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LookupTestComponent } from './lookup-test/lookup-test.component';
import { PasswordListComponent } from './PasswordList/PasswordList.component';

@NgModule({
  declarations: [			
    AppComponent,
      LookupTestComponent,
      PasswordListComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxLookupModule,
    DxDropDownBoxModule,
    DxDataGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
