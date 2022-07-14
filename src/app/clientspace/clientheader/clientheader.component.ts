import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { menuList2 as staticMenuList } from "src/app/shared/data/menuclient"
@Component({
  selector: 'clientheader',
  templateUrl: './clientheader.component.html',
  styleUrls: ['./clientheader.component.scss']
})
export class ClientheaderComponent implements OnInit {

  @Input() topFixed: boolean;
  @Output() toggleSidenav = new EventEmitter();
  isScrolled: boolean;
  menuList2 = [];
  isLessThenLargeDevice;
  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.menuList2 = staticMenuList;
    this.breakpointObserver.observe(['(max-width: 1199px)']).subscribe(({ matches }) => {
      this.isLessThenLargeDevice = matches;
    });
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.isScrolled = window.pageYOffset > 15;
  }
}
