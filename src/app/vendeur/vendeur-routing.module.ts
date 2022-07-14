import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VendeurComponent } from './vendeur.component';

const routes: Routes = [{ path: '', component: VendeurComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendeurRoutingModule { }
