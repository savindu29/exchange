import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsoleRoutingModule } from './console-routing.module';
import { ConsoleComponent } from './console.component';
import { DashboardComponent } from './inner-items/dashboard/dashboard.component';
import { ItemsComponent } from './inner-items/dashboard/items/items.component';
import { ManageProductComponent } from './inner-items/dashboard/items/manage-product/manage-product.component';
import { NewProductComponent } from './inner-items/dashboard/items/manage-product/new-product/new-product.component';
import { MainConsoleHeaderComponent } from './component/main-console-header/main-console-header.component';
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatBadgeModule} from "@angular/material/badge";


@NgModule({
  declarations: [
    ConsoleComponent,
    DashboardComponent,
    ItemsComponent,
    ManageProductComponent,
    NewProductComponent,
    MainConsoleHeaderComponent
  ],
  imports: [
    CommonModule,
    ConsoleRoutingModule,
    MatIconModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatBadgeModule
  ]
})
export class ConsoleModule { }
