import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseLayoutComponent } from './shared/components/layouts/base-layout/base-layout.component';
import { NotFoundComponent } from './not-found/not-found.component';
/////////////////////////////////////////// under the principale template 
const baseLayoutRouting: Routes = [

  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  } , 
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then(m => m.AboutModule)
  },
  
  { 
    path: 'carte', 
  loadChildren: () => import('./carte/carte.module').then(m => m.CarteModule)
 }
 


  ////////////////// {path:'user/:id/profile', redirectTo: 'account/id:/profile', pathMatch :'full'}


  ///     https://youtu.be/_6SaZuidIZI?list=PL5gAX32TSeFJJW3sMhL5xyLV-3-viZxmz
 

////////////////// {path:'user/:id', redirectTo: 'account/id:', pathMatch :'prefix'}


];
////////////////////////////////// single pages with their own templates
const routes: Routes = [
  {
    path: '',
    component: BaseLayoutComponent,
    children: baseLayoutRouting
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'doc',
    loadChildren: () => import('./doc/doc.module').then(m => m.DocModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  }
 
  ,
  {
    path: 'client',
   loadChildren: () => import("./clientspace/client.module").then(m=> m.ClientModule)
  }
  ,
  {
    path: 'contact',
   loadChildren: () => import("./contact/contact.module").then(m=> m.ContactModule)
  }
  
  ,
  { path: 'vendeur', loadChildren: () => import('./vendeur/vendeur.module').then(m => m.VendeurModule) },
  {
    path: 'products',
    loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
  }
  ,
  { path: '**',component : NotFoundComponent}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled'
    })
  ],
  exports: [RouterModule],
  declarations: [
  ]
})
export class AppRoutingModule {}
