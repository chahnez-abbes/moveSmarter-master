import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatMenuModule } from '@angular/material/menu';
import { ClientRoutingModule } from "./client-routing.module";
import { ClientlayoutComponent } from "./clientlayout/clientlayout.component";
import { ClientheaderComponent } from "./clientheader/clientheader.component";
import { SidenavclComponent } from "./sidenavcl/sidenavcl.component";
import { ClientindexComponent } from "./clientindex/clientindex.component";
import { SharedModule } from "../shared/shared.module";
import { MatTabsModule } from "@angular/material/tabs";
import { DashboardclComponent } from './dashboardcl/dashboardcl.component';
import { MatExpansionModule} from '@angular/material/expansion';
import { DashboardModule } from "../dashboard/dashboard.module";
import { CarteModule } from '../carte/carte.module';
import { ContactModule } from "../contact/contact.module";
import { ProductsModule } from '../products/products.module';

import { CarteComponent } from '../carte/carte.component';
import { ContactComponent } from '../contact/contact.component';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { ProductsRoutingModule } from '../products/products-routing.module';
import { HomeProductsComponent } from '../home/home-products/home-products.component';
import { ProductsComponent } from '../products/products.component';
import { ProductDetailsComponent } from '../product/product-details/product-details.component';
import { ProductsDetailsComponent } from '../products/product-details/product-details.component';
import { ProfileComponent } from './profile/profile.component';
@NgModule({
declarations:[
ClientindexComponent,
ClientlayoutComponent,
ClientheaderComponent,
SidenavclComponent,
DashboardclComponent,
ProfileComponent




],
imports:[CommonModule, ClientRoutingModule, SharedModule, MatMenuModule, MatTabsModule,MatExpansionModule ],

// this is the one who shared all the templates details

exports:[ClientheaderComponent,ClientlayoutComponent,FooterComponent,SidenavclComponent]

})
export class ClientModule { }
