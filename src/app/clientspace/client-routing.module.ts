import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarteComponent } from '../carte/carte.component';
import { ContactComponent } from '../contact/contact.component';
import { ProductsDetailsComponent } from '../products/product-details/product-details.component';
import { ProductsComponent } from '../products/products.component';
import { ClientindexComponent } from './clientindex/clientindex.component';
import { ClientlayoutComponent } from './clientlayout/clientlayout.component';
import { ClientspaceComponent } from './clientspace.component';

import { DashboardclComponent } from "./dashboardcl/dashboardcl.component";
import { ProfileComponent } from './profile/profile.component';


const ClientChildrenRoute: Routes = [
  
  
 
  {  
 
    path: 'products',
    component: ProductsComponent
  }
  ,

  { path: '',
    component: ClientindexComponent
  }
 , 
  { path: 'Home',
    component: ClientindexComponent
  }
  , {
    path: 'dashboard',
    component: DashboardclComponent
  },{
    path: 'carte',
    component: CarteComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  }

];
const routes:Routes=[  {
  path: '',
  component: ClientlayoutComponent,
  children: ClientChildrenRoute
},
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule {}
