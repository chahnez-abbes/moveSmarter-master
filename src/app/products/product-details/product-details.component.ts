import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { CartService } from "src/app/services/cart.service";

import { productService } from 'src/app/services/product.service';
import { ProductsModule } from "../products.module";
@Component({
  selector: 'product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductsDetailsComponent implements OnInit {

  produit: any
 
  constructor(private route: ActivatedRoute,
    private service: productService
  ) { 

// this.service.getbyid('1').subscribe(data=>console.log(data))
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const productId = params.get("id");
      this.service.getbyid(productId).subscribe(data=>this.produit=data)});
  }

 

}
