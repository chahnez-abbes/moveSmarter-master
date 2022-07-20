import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';
import { AuthService } from '../services/auth.service';
import { productService } from '../services/product.service';

@Component({
  selector: 'app-vendeur',
  templateUrl: './vendeur.component.html',
  styleUrls: ['./vendeur.component.scss']
})
export class VendeurComponent implements OnInit {

  img : string
  Uid
  successMessage
  task: AngularFireUploadTask
  ref: AngularFireStorageReference
  userN={
    username:''
  };




// Arraydata: any
//   product={
//   id:'10',
//   created_by: {
//       name: 'Amira Bjaoui',
//       avatar: 'assets/images/avatar.png'
//   },
//   images:[
//     'assets/images/products/02-1.png', 
//     'assets/images/products/02-2.png', 'assets/images/products/02-3.png'],
//   name: 'samsung galaxy A30s',
//   price: 1200.000,
//   rating: 5,
//   feedback: 10,
//   category: 'phones',
//   tags: [
//       'phone',
//       'galaxy',
//       'reconditionnéé'
//   ],
//   fiche:{
//     ecran:'5.71 HD',
//     processeur: 'Android 8',
//    se: 'Android8',
//    ram: '8GO', 
//    stockage: '64GO', 
//    autres: ['Appareil photo: double 12mp','Bleutooth 5.0'],
  
//   }
// }
  constructor(  private fs:AngularFirestore,
    private service: productService, private as:AuthService , private fst:AngularFireStorage) {

      this.as.user.subscribe(user=>{
        this.Uid=user.uid  })
// this.service.getAllproducts().subscribe(data=>this.Arraydata=data)
// this.service.create(this.product).subscribe(data=>console.log(data))
// this.service.delete('1').subscribe(data=>console.log(data))

}
 
ngOnInit(): void {
  this.fs.collection("users").ref.doc(localStorage.getItem("userconnect")).get().then((data)=>{
    console.log(data.data())
  
    this.userN.username=data.data()['fname']
    console.log(this.userN.username)
  })
  
} 
 
 
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
 this.fs.collection("product").doc().set({
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
}
 


