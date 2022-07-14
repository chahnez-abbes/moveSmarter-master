import { Component, OnInit } from '@angular/core';
import { menuList3 } from 'src/app/shared/data/menuvendeur';

@Component({
  selector: 'sidenavendeur',
  templateUrl: './sidenavendeur.component.html',
  styleUrls: ['./sidenavendeur.component.scss']
})
export class SidenavendeurComponent implements OnInit {

 
  navList3 = [];
  constructor() { }

  ngOnInit(): void {
    this.navList3 = menuList3;
  }
}
