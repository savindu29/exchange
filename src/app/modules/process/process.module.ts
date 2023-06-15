import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProcessRoutingModule } from './process-routing.module';
import { ProcessComponent } from './process.component';
import { ProcessHeaderComponent } from './components/process-header/process-header.component';
import {MatButtonModule} from "@angular/material/button";
import { MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from "@angular/material/icon";

import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { ProductComponent } from './components/product/product.component';


@NgModule({
  declarations: [
    ProcessComponent,
    ProcessHeaderComponent,
    LandingpageComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    ProcessRoutingModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule
  ]
})
export class ProcessModule { }
