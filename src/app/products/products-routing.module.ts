import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';

import { ProductsDetailsComponent } from "./product-details/product-details.component";
import { CommonModule } from '@angular/common';

const routes: Routes = [
  
  { path: '', component: ProductsComponent },
{ path: ':id', component: ProductsDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes),CommonModule],
  exports: [RouterModule],
  declarations: [
  ]
})
export class ProductsRoutingModule { }
