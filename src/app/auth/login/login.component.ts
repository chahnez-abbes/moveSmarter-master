import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'll-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
messageError
  constructor(private service:AuthService, private route:Router){}

  ngOnInit(): void {

  
  }
  login(f){
let data=f.value 
this.service.SingIn(data.email,data.password).then((user)=>
{
  console.log("login")
this.route.navigate(['/client'])

   } )
  .catch(()=>{
this.messageError="ce compte n'existe pas, verifier votre mail ou mot de passe "

  })
  }

}
