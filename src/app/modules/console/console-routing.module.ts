import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsoleComponent } from './console.component';
import {DashboardComponent} from "./inner-items/dashboard/dashboard.component";

import {ManageProductComponent} from "./inner-items/dashboard/items/manage-product/manage-product.component";
import {NewProductComponent} from "./inner-items/dashboard/items/manage-product/new-product/new-product.component";

const routes: Routes = [{ path: '', component: ConsoleComponent,children:[
    {path:'',redirectTo:'/console/playground/product/new',pathMatch:"full"},
  {path:'playground',component:DashboardComponent,children:[
      {path:'product',component:ManageProductComponent,children:[
          {path:'new',component:NewProductComponent}
        ]}
    ]}
  ] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsoleRoutingModule { }
