import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MemberlistComponent } from './memberlist/memberlist.component';
import { HttpClientModule } from '@angular/common/http';
import { MembercreateComponent } from './membercreate/membercreate.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MemberlistComponent,
    MembercreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
