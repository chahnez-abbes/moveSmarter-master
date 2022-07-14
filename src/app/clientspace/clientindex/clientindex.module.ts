import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgParticlesModule } from 'ng-particles';
import { SharedModule } from '../../shared/shared.module';
import { ProductsComponent } from '../../products/products.component';
import{ClientindexComponent} from '../clientindex/clientindex.component';


@NgModule({
  declarations: [ClientindexComponent, ProductsComponent],
  imports: [CommonModule, SharedModule, NgParticlesModule]

})
export class ClientindexModule{}