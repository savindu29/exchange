import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProcessComponent } from './process.component';
import {LandingpageComponent} from "./components/landingpage/landingpage.component";

const routes: Routes = [{
  path: '', component: ProcessComponent, children: [
    {path: '', redirectTo: '/process/landing', pathMatch: 'full'},
    {path: 'landing', component: LandingpageComponent},
  ]
}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProcessRoutingModule { }
