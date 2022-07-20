import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'll-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  img: string;
  task: AngularFireUploadTask
  ref: AngularFireStorageReference
  constructor(private sa : AuthService , private fs: AngularFirestore, private route: Router, private fst: AngularFireStorage) {  }

  ngOnInit(): void {
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
  register(f){
let data=f.value
this.sa.SingUp(data.email,data.password).then((user)=>{
  localStorage.setItem("userconnect",user.user.uid)
this.fs.collection("users").doc(user.user.uid).set({
fname:data.fname,
email: data.email,
uid:user.user.uid ,
bio: data.bio,
interest: data.interest,
phone:data.phone,
adress:data.adress,
image: this.img

}).then(()=>{

  this.route.navigate(['/client'])

})



console.log('register')
}) .catch(()=>{
console.log('error register')
})
}

}
