import { Injectable } from '@angular/core';

import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';


import { AngularFireAuth } from '@angular/fire/auth';
import { FirebaseApp } from '@angular/fire';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // error fixed by defult.user
   user: Observable<firebase.default.User> ;
constructor( private fa:AngularFireAuth){
this.user=this.fa.user

}
SingUp(email,password){
  return this.fa.createUserWithEmailAndPassword(email,password)

}
SingIn(email,password){
  return this.fa.signInWithEmailAndPassword(email,password)
}

logout(){
 this.fa.signOut()
}

}
