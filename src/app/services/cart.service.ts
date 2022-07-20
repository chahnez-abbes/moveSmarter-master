import { Injectable } from '@angular/core';

import { LocalStorageService } from "./local-storage.service";

import { Product } from "../BD/products.module";
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cartContent: any = [];

  constructor( private fs:AngularFirestore, as:AuthService) {
    
  }
  userid=localStorage.getItem("userconnect")
  addtocarte(data){
   return   this.fs.collection(`users/${this.userid}/cart`).add(data)
  }

 getcart(){
  return   this.fs.collection(`users/${this.userid}/cart`).snapshotChanges()
 }

 delete(id){
  return this.fs.doc(`users/${this.userid}/cart/${id}`).delete()
 }
 
 update(id, qte){
  return this.fs.doc(`users/${this.userid}/cart/${id}`).update({qte})
 }


  

}







