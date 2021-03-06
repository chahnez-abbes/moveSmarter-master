import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendeurRoutingModule } from './vendeur-routing.module';
import { VendeurComponent } from './vendeur.component';
import { SidenavendeurComponent } from './sidenavendeur/sidenavendeur.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTabsModule } from '@angular/material/tabs';
import { MatMenuModule } from '@angular/material/menu';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    VendeurComponent, 
    SidenavendeurComponent
  ],
  imports: [
    CommonModule,
    VendeurRoutingModule,
    SharedModule, 
    MatMenuModule,
     MatTabsModule,
     MatExpansionModule,
     SharedModule,
     FormsModule
  ]
})
export class VendeurModule { }
