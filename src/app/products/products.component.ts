import { Component, OnInit } from '@angular/core';
import { CartService } from "../services/cart.service";
import { productService } from "../services/product.service";
import { Gamings, Laptops, Phone } from "../BD/products-list";
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from '../services/auth.service';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';
import { element } from 'protractor';
import { userInfo } from 'os';



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
det: number=-1
  userN={
    username:'',
  
    image:'',
    bio:'',
    phone:'',
    adress:'',
    interest:'',
    uid:'',
    email:'',
   
  }
  dataproduct: any
  successMessage
  task: AngularFireUploadTask
  ref: AngularFireStorageReference

  ///////////////////////////
  isLoaded: boolean;
  advanceSearchExpanded: boolean = false;
  Array: any
  dataArray: any
  dataob: Subscription
  phone: boolean;
  product= { productname: '',
  category: '',
  condition:'',
  price: '',
  about: '',
  image: '',
  uid:'',
  user: '',
  market: '',
  shipping: '',
  payment: '',
  id:'',
  qte:''};
  constructor( private fs:AngularFirestore,
    private fst:AngularFireStorage, private cs:CartService
  ) { 
//     this.as.user.subscribe(user=>{
// this.Uid=user.uid

//     })

this.Uid=localStorage.getItem("userconnect")





  }

  ngOnInit(): void {

    ///// get all products 
this.fs.collection("product").snapshotChanges().subscribe((data)=>{
 this.Array= data.map(element=>{
 return{ 
  id: element.payload.doc.id ,
 productname: element.payload.doc.data()['productname'],
 category: element.payload.doc.data()['category'],
 condition: element.payload.doc.data()['condition'],
 price: element.payload.doc.data()['price'],
 about: element.payload.doc.data()['about'],
 image: element.payload.doc.data()['image'],
 uid: element.payload.doc.data()['uid'],
 user: element.payload.doc.data()['user'],
 market: element.payload.doc.data()['market'],
 shipping: element.payload.doc.data()['shipping'],
 payment: element.payload.doc.data()['payment'],
 qte: element.payload.doc.data()['qte'],
}

  })
})


  

/////////////////////// get user by id

this.fs.collection("users").ref.doc(localStorage.getItem("userconnect")).get().then((data)=>{
  // console.log(data.data())

  this.userN.username=data.data()['fname'],
 
  this.userN.image=data.data()['image'],  
  this.userN.bio=data.data()['bio'],
  this.userN.interest=data.data()['interest'],
  this.userN.phone=data.data()['phone'],
  this.userN.adress=data.data()['adress'],
  this.userN.email=data.data()['email'],
  this.userN.uid=localStorage.getItem("userconnect")

})

////////////////// get product by id 




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
this.fs.collection("product").doc(this.Uid).set({
  productname: data.productname,
  category: data.category,
  condition: data.condition,
  price: data.price,
  about: data.about,
 image: this.img,
  uid:this.Uid,
  user: this.userN.username,
  market: data.market,
  shipping:data.shipping,
  payment:data.payment,
  qte: data.qte

}).then(()=>{

  this.successMessage="added seccesfully"
}).catch(()=>{
  console.log('error add')
  })
}

// updateproduct(f){
// // this.fs.collection("product").doc(this.dataproduct).update({})

// }

update(product){
  this.product=product
  // let data=f1.value
  this.fs.collection("product").doc(this.product.uid).update({
  
  
    productname:this.product.productname,
   image: this.img,
    about:this.product.about,
    category:this.product.category,
    condition:this.product.condition,
    market:this.product.market,
    payment:this.product.payment,
    price:this.product.price,
    shipping:this.product.shipping,
    qte:this.product.qte,
   user: this.product.user,
   uid: this.product.uid 
   //id:this.dataproduct.id
  
  } 
  ).then(  data=>{
    console.log("succes")
  }
   
  )
  

}
///////////// delete function 
delete(id){

    
  var docRef = this.fs.collection("product").doc(id);
docRef.delete()
console.log(id)
}

details(ID ){
  console.log(ID)
   ///// get all products 
   this.fs.collection("product").snapshotChanges().subscribe((data)=>{
    
    this.dataproduct= data.map(element=>{
    if(element.payload.doc.id===ID)  
    return{ 
     id: element.payload.doc.id ,
    productname: element.payload.doc.data()['productname'],
    category: element.payload.doc.data()['category'],
    condition: element.payload.doc.data()['condition'],
    price: element.payload.doc.data()['price'],
    about: element.payload.doc.data()['about'],
    image: element.payload.doc.data()['image'],
    uid: element.payload.doc.data()['uid'],
    user: element.payload.doc.data()['user'],
    market: element.payload.doc.data()['market'],
    shipping: element.payload.doc.data()['shipping'],
    payment: element.payload.doc.data()['payment'],
    qte: element.payload.doc.data()['qte'],
   }

   console.log("congrats")

  
  })

   })




}


add: number =-1
addtocarte(index){
this.add= +index
}
buy(qte){
let selected=this.Array[this.add]
let data={
  productname:selected.productname,
  qte: qte,
  price: selected.price,
  about: selected.about,
  image: selected.image
}
this.cs.addtocarte(data).then(()=> this.add=-1)

}

}







