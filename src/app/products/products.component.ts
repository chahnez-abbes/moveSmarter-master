import { Component, OnInit } from '@angular/core';
import { CartService } from "../services/cart.service";
import { productService } from "../services/product.service";
import { Gamings, Laptops, Phone } from "../BD/products-list";
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  // public phoneList: any = [];
  // public laptopList: any=[];
  // public gamingList: any =[];
  isLoaded: boolean;
  advanceSearchExpanded: boolean = false;
  
  dataArray: any
  dataob: Subscription
  constructor(
    private service: productService
  ) { 

this.dataob=this.service.getAllproducts().subscribe(data=>this.dataArray=data)
  }

  ngOnInit(): void {
    setTimeout(() => {
  
      this.isLoaded = true
    }, 80)
  }
 
ngOnDestroy(){
 this.dataob.unsubscribe()
}
}