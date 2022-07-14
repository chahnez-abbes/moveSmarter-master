import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { menuList2 } from '../../shared/data/menuclient'
@Component({
  selector: 'sidenavcl',
  templateUrl: './sidenavcl.component.html',
  styleUrls: ['./sidenavcl.component.scss']
})
export class SidenavclComponent implements OnInit {

  navList2 = [];
  constructor( private sa : AngularFireAuth, private route:Router) { }

  ngOnInit(): void {
    this.navList2 = menuList2;
  }
  logout(){
 this.sa.signOut().then(()=>{ 
  

  
  this.route.navigate(['/auth/login'])
  console.log("bravo")

})
  
  
  .catch(()=>{
  console.log("error")
 })
  }

}
