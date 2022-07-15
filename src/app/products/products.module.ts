import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductsDetailsComponent } from './product-details/product-details.component';

import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { MatExpansionModule } from '@angular/material/expansion';
import { NgParticlesModule } from 'ng-particles';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatMenuModule } from '@angular/material/menu';
import { ClientModule } from "../clientspace/client.module";
import { ClientRoutingModule } from '../clientspace/client-routing.module';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    ProductsComponent,
   ProductsDetailsComponent


  ],
  imports: [
    CommonModule,
    RouterModule,
    ProductsRoutingModule,
    MatExpansionModule,
    NgParticlesModule,
    NgxSkeletonLoaderModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatMenuModule, 
    MatTabsModule,
   ClientModule,
   FormsModule
    
  ]
  
})
export class ProductsModule { }

// @NgModule({
//   declarations: [ProductListComponent, ProductDetailsComponent, ProductHeroComponent],
//   imports: [
//     CommonModule,
//     ProductRoutingModule,
//     SharedModule,
   
//   ]
// })
// export class ProductModule { }
