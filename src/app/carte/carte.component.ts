import { Component, OnInit } from '@angular/core';
import { CartService } from "src/app/services/cart.service";
import { Productdb } from "../BD/products-list";
@Component({
  selector: 'app-carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.css']
})
export class CarteComponent implements OnInit {

  public cartContent: any = [];
  totalPrice: number = 0;
  TAX_RATE: number = 0.2;

  constructor( private cartService: CartService) {
   }

  ngOnInit(): void {
    this.getCartContentDetails();
    this.computeTotalPrice();
  }

  getCartContentDetails() {
    this.cartContent = this.cartService.cartContent;
    for (let index = 0; index < this.cartContent.length; index++) {
      const product = Productdb.filter(product => product.id == this.cartContent[index].id)[0];
      this.cartContent[index].title = product.name;
      this.cartContent[index].price = product.price;
    }
 
  }

  computeTotalPrice() {
    // for (let index = 0; index < this.cartContent.length; index++) {
    //   this.totalPrice += this.cartContent[index].price * this.cartContent[index].quantity;
    // }
    // or
    this.cartContent.forEach((item: { price: number; quantity: number; }) => {
      this.totalPrice += item.price * item.quantity;
    });
  }

  clearCart() {
    this.cartService.clear();
    this.ngOnInit();
  }

}
