import { Component, OnInit } from '@angular/core';
import { CartService } from "../services/cart.service";
import { productService } from "../services/product.service";
import { Gamings, Laptops, Phone } from "../BD/products-list";
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from '../services/auth.service';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  // public phoneList: any = [];
  // public laptopList: any=[];
  // public gamingList: any =[];
 img : string
  Uid
  successMessage
  task: AngularFireUploadTask
  ref: AngularFireStorageReference

  ///////////////////////////
  isLoaded: boolean;
  advanceSearchExpanded: boolean = false;
  
  dataArray: any
  dataob: Subscription
  constructor( private fs:AngularFirestore,
    private service: productService, private as:AuthService , private fst:AngularFireStorage
  ) { 
/////////////////// function 
    this.as.user.subscribe(user=>{
this.Uid=user.uid

    })
//////////////////// function 
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
 /////////////// function 
uploadImage(event){
 const id=Math.random().toString(36).substring(2) 
 this.ref=this.fst.ref(id)
 this.task=this.ref.put(event.target.files[0])
 this.task.then((data)=>
 data.ref.getDownloadURL().then( url=>{
 this.img=url
 console.log("succes")
 })
 )


}


addproduct(f){
let data=f.value
/// to add more then one product delete .doc(this.Uid) 
this.fs.collection("products").doc(this.Uid).set({
  productname: data.productname,
  category: data.category,
  condition: data.condition,
  price: data.price,
  about: data.about,
 image: this.img,
  uid:this.Uid

}).then(()=>{

  this.successMessage="added seccesfully"
}).catch(()=>{
  console.log('error add')
  })
}
}