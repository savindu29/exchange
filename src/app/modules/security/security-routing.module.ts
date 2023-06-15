import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecurityComponent } from './security.component';
import {LoginComponent} from "./components/login/login.component";
import {SigninComponent} from "./components/signin/signin.component";

const routes: Routes = [
  {  path: '', component: SecurityComponent, children: [
      {path: '', redirectTo: '/security/login', pathMatch:'full'},
      {path: 'login', component: LoginComponent},
      {path: 'signup', component:SigninComponent },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecurityRoutingModule { }
