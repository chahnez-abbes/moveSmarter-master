import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'll-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private sa : AuthService , private fs: AngularFirestore, private route: Router) {  }

  ngOnInit(): void {
  }
register(f){
let data=f.value
this.sa.SingUp(data.email,data.password).then((user)=>{
console.log('register')
this.fs.collection("users").doc(user.user.uid).set({
fname:data.fname,
email: data.email,
uid:user.user.uid

}).then(()=>{

  this.route.navigate(['/client'])

})



console.log('register')
}) .catch(()=>{
console.log('error register')
})
}

}
