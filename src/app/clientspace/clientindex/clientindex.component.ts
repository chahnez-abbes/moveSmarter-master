import { Component, NgModule, OnInit } from '@angular/core';
import { productsDB } from '../../shared/data/products';
import { Gamings, Laptops, Phone } from "../../BD/products-list";

import {  ProductsComponent } from "../../products/products.component";
import { productService } from 'src/app/services/product.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'clientindex',
  templateUrl: './clientindex.component.html',
  styleUrls: ['./clientindex.component.scss']
})
export class ClientindexComponent implements OnInit {
  particlesOptions = {
    particles: {
      color: {
        value: ['#ffffff', '#ffffff']
      },
      size: {
        value: 1
      },
      lineLinked: {
        enable: true,
        color: 'random'
      },
      move: {
        enable: true,
        speed: 1.5
      }
    }
  };
  constructor() {}

  ngOnInit(): void {}
}
