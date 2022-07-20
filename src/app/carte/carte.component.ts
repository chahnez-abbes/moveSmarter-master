import { Component, OnInit } from '@angular/core';
import { CartService } from "src/app/services/cart.service";
import { Productdb } from "../BD/products-list";
import { shopping } from '../interfaces/shopping.interface';
@Component({
  selector: 'app-carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.css']
})
export class CarteComponent implements OnInit {



carte: shopping[]=[]


  constructor( private cs: CartService) {
   }

  ngOnInit(): void {
   this.cs.getcart().subscribe( cart =>{
  this.carte=cart.map( shop=>{
    return  {
id: shop.payload.doc.id,
// thabet fiha 
qte: shop.payload.doc.data()['qte'],
price: shop.payload.doc.data()['price'],
productname: shop.payload.doc.data()['productname'],
about: shop.payload.doc.data()['about'],
image: shop.payload.doc.data()['image'],


    }
  }

  )

  // test 

   })
  }



  delete(index){
  
this.cs.delete(this.carte[index].id)
console.log("bow")
  }
  
  update(index, qte){
    this.cs.update(this.carte[index].id, qte)
    console.log(index)
  }
}
