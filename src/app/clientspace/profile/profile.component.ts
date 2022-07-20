import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnDestroy {
Uid

dataprofile={
  fname:'',
  image:'',
  bio:'',
  phone:'',
  adress:'',
  interest:'',
  uid:'',
  email:''

}
img: string;
task: AngularFireUploadTask
ref: AngularFireStorageReference

  constructor( private as:AuthService, private fs:AngularFirestore, private fst: AngularFireStorage) {

  
    

   }
 

  ngOnInit(): void {
  
   this.fs.collection("users").ref.doc(localStorage.getItem("userconnect")).get().then((data)=>{
      console.log(data.data())
    this.dataprofile.fname=data.data()['fname'],
    this.dataprofile.image=data.data()['image'],  
    this.dataprofile.bio=data.data()['bio'],
    this.dataprofile.interest=data.data()['interest'],
    this.dataprofile.phone=data.data()['phone'],
    this.dataprofile.adress=data.data()['adress'],
    this.dataprofile.email=data.data()['email'],
    this.dataprofile.uid=localStorage.getItem("userconnect")
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

   update(){
this.fs.collection("users").doc(this.dataprofile.uid).update({
  
  
  fname:this.dataprofile.fname,
  image: this.img,
  bio:this.dataprofile.bio,
  phone:this.dataprofile.phone,
  adress:this.dataprofile.adress,
  interest:this.dataprofile.interest,
  uid:this.dataprofile.uid,
  email:this.dataprofile.email

} 
).then(  data=>{
  console.log("succes")
}
 
)

   }
   
   ngOnDestroy(): void {
     }
}
