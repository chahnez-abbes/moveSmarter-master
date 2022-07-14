import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ContactComponent } from './contact.component';
import { SharedModule } from '../../shared/shared.module';
import { GoogleLocationMapComponent } from './google-location-map/google-location-map.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { HttpClientJsonpModule } from '@angular/common/http';
import { ClientRoutingModule } from '../client-routing.module';
import { SidenavclComponent } from '../sidenavcl/sidenavcl.component';

@NgModule({
  declarations: [ContactComponent, GoogleLocationMapComponent],
  imports: [CommonModule, SharedModule, GoogleMapsModule, HttpClientJsonpModule,ClientRoutingModule],
  exports: [GoogleLocationMapComponent,]
})
export class ContactModule {}
