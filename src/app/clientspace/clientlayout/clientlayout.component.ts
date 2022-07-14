import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import {BreakpointObserver} from '@angular/cdk/layout';
import { takeWhile } from 'rxjs/operators';
@Component({
  selector: 'app-clientlayout',
  templateUrl: './clientlayout.component.html',
  styleUrls: ['./clientlayout.component.scss']
})
export class ClientlayoutComponent implements OnInit, OnDestroy {
  isAlive: boolean = true;
  @ViewChild('sidenav') sidenav;
  isSidenavExpand = false;
  isLessThenLargeDevice = true;
  
  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver.observe(['(max-width: 1199px)']).pipe(takeWhile(() => this.isAlive)).subscribe(({matches}) => {
      this.isLessThenLargeDevice = matches;
      if (!matches) {
        this.isSidenavExpand = false;
      }
    });
  }

  ngOnInit(): void {}
  
  ngOnDestroy(): void{
    this.isAlive = false
  }

  toggleSidenav(): void {
    this.sidenav.toggle();
    this.isSidenavExpand = this.sidenav.opened;
  }
}
