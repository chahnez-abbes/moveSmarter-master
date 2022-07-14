import { Component, OnDestroy, OnInit } from '@angular/core';
import { productService } from '../services/product.service';

@Component({
  selector: 'app-vendeur',
  templateUrl: './vendeur.component.html',
  styleUrls: ['./vendeur.component.scss']
})
export class VendeurComponent implements OnInit,OnDestroy {

Arraydata: any
  product={
  id:'10',
  created_by: {
      name: 'Amira Bjaoui',
      avatar: 'assets/images/avatar.png'
  },
  images:[
    'assets/images/products/02-1.png', 
    'assets/images/products/02-2.png', 'assets/images/products/02-3.png'],
  name: 'samsung galaxy A30s',
  price: 1200.000,
  rating: 5,
  feedback: 10,
  category: 'phones',
  tags: [
      'phone',
      'galaxy',
      'reconditionnéé'
  ],
  fiche:{
    ecran:'5.71 HD',
    processeur: 'Android 8',
   se: 'Android8',
   ram: '8GO', 
   stockage: '64GO', 
   autres: ['Appareil photo: double 12mp','Bleutooth 5.0'],
  
  }
}
  constructor( private service:productService) {


this.service.getAllproducts().subscribe(data=>this.Arraydata=data)
this.service.create(this.product).subscribe(data=>console.log(data))
this.service.delete('1').subscribe(data=>console.log(data))

}
 
  ngOnInit(): void {
  }
 
 
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

 

}
