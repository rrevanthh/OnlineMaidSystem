import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MemberlistComponent } from './memberlist/memberlist.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
   { path: '', component: LoginComponent },
   { path: 'memberlist', component: MemberlistComponent },
   { path: 'login', component: LoginComponent },
   { path: 'register', component: RegisterComponent },
   { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
