import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { CarteComponent } from './carte.component';
import { BreakpointObserver } from '@angular/cdk/layout';
import { SharedModule } from '../shared/shared.module';
import { Router } from '@angular/router';
import { ClientRoutingModule } from '../clientspace/client-routing.module';
import { ClientlayoutComponent } from '../clientspace/clientlayout/clientlayout.component';
import { ClientspaceComponent } from '../clientspace/clientspace.component';
import { ClientModule } from '../clientspace/client.module';

@NgModule({
  declarations: [
    CarteComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ClientModule
  ]
})
export class CarteModule { 
  isLessThenLargeDevice;

  constructor(private breakpointObserver: BreakpointObserver, private router: Router) {}

  ngOnInit(): void {
 
  }
}
