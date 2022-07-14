import { Product,Phones, Laptop, Gaming } from "./products.module";

  

export const Productdb:Product[]= [

{
  id:'1',
  created_by: {
      name: 'mouhamed saidi',
      avatar: 'assets/images/avatar.png'
  },
  images:[
    'assets/images/products/02-1.png', 
    'assets/images/products/02-2.png', 'assets/images/products/02-3.png'],
  name: 'Iphone 8+',
  price: 700.000,
  rating: 4.8,
  feedback: 3,
  category: 'phones',
  tags: [
      'phone',
      'iphone',
      'reconditionnéé'
  ],
  fiche:{
    ecran:'5.71 HD',
    processeur: 'Appel A8 Bionic Octa-core',
   se: 'IOS8',
   ram: '8GO', 
   stockage: '64GO', 
   autres: ['Appareil photo: double 12mp','Bleutooth 5.0'],
  
  }
},
{
  id:'2',
  created_by: {
      name: 'med amine jmini',
      avatar: 'assets/images/avatar.png'
  },
  images:[
    'assets/images/products/01-1.png', 
    'assets/images/products/01-2.png', 'assets/images/products/02-3.png'],
  name: 'pc portable asus',
  price: 800.000,
  rating: 4.1,
  feedback: 3,
  category: 'laptop',
  tags: [
      'pc',
      'pc portable',
      'asus'
  ],
  fiche:{
    ecran:'5.71 HD',
    processeur: 'i5',
   se: 'windows 10',
   ram: '8GO', 
   stockage: '250GO SSD', 
   autres: ['Graphique nvidia','Bleutooth 5.0','usb2 , usb3'],
  
  }
},
{
  id:'3',
  created_by: {
      name: 'chahinez abbes',
      avatar: 'assets/images/avatar.png'
  },
  images:[
    'assets/images/products/03-1.png', 
    'assets/images/products/03-1.png', 'assets/images/products/03-1.png'],
  name: 'gamin products',
  price: 1700.000,
  rating: 4.8,
  feedback: 3,
  category: 'accesoire',
  tags: [
      'gaming',
      'tuff',
      'reconditionnée'
  ],
  fiche:{
    ecran:'0',
    processeur: '0',
   se: '0',
   ram: '0', 
   stockage: '64GO', 
   autres: ['Appareil photo: double 12mp','Bleutooth 5.0'],
  
  }
},
{
  id:'1',
  created_by: {
      name: 'mouhamed saidi',
      avatar: 'assets/images/avatar.png'
  },
  images:[
    'assets/images/products/02-1.png', 
    'assets/images/products/02-2.png', 'assets/images/products/02-3.png'],
  name: 'Iphone 8+',
  price: 700.000,
  rating: 4.8,
  feedback: 3,
  category: 'phones',
  tags: [
      'phone',
      'iphone',
      'reconditionnéé'
  ],
  fiche:{
    ecran:'5.71 HD',
    processeur: 'Appel A8 Bionic Octa-core',
   se: 'IOS8',
   ram: '8GO', 
   stockage: '64GO', 
   autres: ['Appareil photo: double 12mp','Bleutooth 5.0'],
  
  }
},
{
  id:'1',
  created_by: {
      name: 'mouhamed saidi',
      avatar: 'assets/images/avatar.png'
  },
  images:[
    'assets/images/products/02-1.png', 
    'assets/images/products/02-2.png', 'assets/images/products/02-3.png'],
  name: 'Iphone 8+',
  price: 700.000,
  rating: 4.8,
  feedback: 3,
  category: 'phones',
  tags: [
      'phone',
      'iphone',
      'reconditionnéé'
  ],
  fiche:{
    ecran:'5.71 HD',
    processeur: 'Appel A8 Bionic Octa-core',
   se: 'IOS8',
   ram: '8GO', 
   stockage: '64GO', 
   autres: ['Appareil photo: double 12mp','Bleutooth 5.0'],
  
  }
},
{
  id:'1',
  created_by: {
      name: 'mouhamed saidi',
      avatar: 'assets/images/avatar.png'
  },
  images:[
    'assets/images/products/02-1.png', 
    'assets/images/products/02-2.png', 'assets/images/products/02-3.png'],
  name: 'Iphone 8+',
  price: 700.000,
  rating: 4.8,
  feedback: 3,
  category: 'phones',
  tags: [
      'phone',
      'iphone',
      'reconditionnéé'
  ],
  fiche:{
    ecran:'5.71 HD',
    processeur: 'Appel A8 Bionic Octa-core',
   se: 'IOS8',
   ram: '8GO', 
   stockage: '64GO', 
   autres: ['Appareil photo: double 12mp','Bleutooth 5.0'],
  
  }
}




];
export const Phone:Phones[]= [
  {

    id:'1',
    created_by: {
          name: 'ahmed ben ahmed',
         avatar: 'assets/images/avatar.png'
       },
    rating: 4.8,
    feedback: 3,
    tags: [
        'phone',
        'iphone',
        'reconditionnéé'
    ],
     images:[
      'assets/images/products/02-1.png', 
       'assets/images/products/02-2.png', 'assets/images/products/02-3.png'],
     name: 'Iphone 8+',
     price: 700.000,
     ecran: '5.7 hd', 
    processeur: 'Appel A8 Bionic Octa-core',
     se: 'IOS8',
    ram:'8go',
    stockage: '64GO', 
   cam:['2 appareil photo'],
   battrie:'100%',
   bleutooth:'5',
   couleur:['rouge','vert'],
    
    
  },{

    id:'1',
    created_by: {
          name: 'mouhamed saidi',
         avatar: 'assets/images/avatar.png'
       },
    rating: 4.8,
    feedback: 3,
    tags: [
        'phone',
        'iphone',
        'reconditionnéé'
    ],
     images:[
      'assets/images/products/02-1.png', 
       'assets/images/products/02-2.png', 'assets/images/products/02-3.png'],
     name: 'Iphone 8+',
     price: 700.000,
     ecran: '5.7 hd', 
    processeur: 'Appel A8 Bionic Octa-core',
     se: 'IOS8',
    ram:'8go',
    stockage: '64GO', 
   cam:['2 appareil photo'],
   battrie:'100%',
   bleutooth:'5',
   couleur:['rouge','vert'],
    
    
  },{

    id:'1',
    created_by: {
          name: 'mouhamed saidi',
         avatar: 'assets/images/avatar.png'
       },
    rating: 4.8,
    feedback: 3,
    tags: [
        'phone',
        'iphone',
        'reconditionnéé'
    ],
     images:[
      'assets/images/products/02-1.png', 
       'assets/images/products/02-2.png', 'assets/images/products/02-3.png'],
     name: 'Iphone 8+',
     price: 700.000,
     ecran: '5.7 hd', 
    processeur: 'Appel A8 Bionic Octa-core',
     se: 'IOS8',
    ram:'8go',
    stockage: '64GO', 
   cam:['2 appareil photo'],
   battrie:'100%',
   bleutooth:'5',
   couleur:['rouge','vert'],
    
    
  },{

    id:'1',
    created_by: {
          name: 'mouhamed saidi',
         avatar: 'assets/images/avatar.png'
       },
    rating: 4.8,
    feedback: 3,
    tags: [
        'phone',
        'iphone',
        'reconditionnéé'
    ],
     images:[
      'assets/images/products/02-1.png', 
       'assets/images/products/02-2.png', 'assets/images/products/02-3.png'],
     name: 'Iphone 8+',
     price: 700.000,
     ecran: '5.7 hd', 
    processeur: 'Appel A8 Bionic Octa-core',
     se: 'IOS8',
    ram:'8go',
    stockage: '64GO', 
   cam:['2 appareil photo'],
   battrie:'100%',
   bleutooth:'5',
   couleur:['rouge','vert'],
    
    
  },{

    id:'1',
    created_by: {
          name: 'mouhamed saidi',
         avatar: 'assets/images/avatar.png'
       },
    rating: 4.8,
    feedback: 3,
    tags: [
        'phone',
        'iphone',
        'reconditionnéé'
    ],
     images:[
      'assets/images/products/02-1.png', 
       'assets/images/products/02-2.png', 'assets/images/products/02-3.png'],
     name: 'Iphone 8+',
     price: 700.000,
     ecran: '5.7 hd', 
    processeur: 'Appel A8 Bionic Octa-core',
     se: 'IOS8',
    ram:'8go',
    stockage: '64GO', 
   cam:['2 appareil photo'],
   battrie:'100%',
   bleutooth:'5',
   couleur:['rouge','vert'],
    
    
  },{

    id:'1',
    created_by: {
          name: 'mouhamed saidi',
         avatar: 'assets/images/avatar.png'
       },
    rating: 4.8,
    feedback: 3,
    tags: [
        'phone',
        'iphone',
        'reconditionnéé'
    ],
     images:[
      'assets/images/products/02-1.png', 
       'assets/images/products/02-2.png', 'assets/images/products/02-3.png'],
     name: 'Iphone 8+',
     price: 700.000,
     ecran: '5.7 hd', 
    processeur: 'Appel A8 Bionic Octa-core',
     se: 'IOS8',
    ram:'8go',
    stockage: '64GO', 
   cam:['2 appareil photo'],
   battrie:'100%',
   bleutooth:'5',
   couleur:['rouge','vert'],
    
    
  },
  





];


export const Laptops: Laptop[]=  [

{
  id:'2',
    created_by: {
        name: 'med amine jmini',
        avatar: 'assets/images/avatar.png'
    },
    rating: 4.1,
      feedback: 3,
      tags: [
          'pc',
          'pc portable',
          'asus'
      ],
        images:[
    'assets/images/products/01-1.png', 
    'assets/images/products/01-2.png', 'assets/images/products/02-3.png'],
  name: 'pc portable asus',
  price: 800.000,
  ecran: ' 7.1 HD',
  processeur:'i5',
  se:"windows",
  ram:'8GO',
disque:'1 to',
graf:['nvidia'],
clavier:'integré',
couleur:['rouge','blanc'],

}
,{
  id:'2',
    created_by: {
        name: 'med amine jmini',
        avatar: 'assets/images/avatar.png'
    },
    rating: 4.1,
      feedback: 3,
      tags: [
          'pc',
          'pc portable',
          'asus'
      ],
        images:[
    'assets/images/products/01-1.png', 
    'assets/images/products/01-2.png', 'assets/images/products/02-3.png'],
  name: 'pc portable asus',
  price: 800.000,
  ecran: ' 7.1 HD',
  processeur:'i5',
  se:"windows",
  ram:'8GO',
disque:'1 to',
graf:['nvidia'],
clavier:'integré',
couleur:['rouge','blanc'],

},{
  id:'2',
    created_by: {
        name: 'med amine jmini',
        avatar: 'assets/images/avatar.png'
    },
    rating: 4.1,
      feedback: 3,
      tags: [
          'pc',
          'pc portable',
          'asus'
      ],
        images:[
    'assets/images/products/01-1.png', 
    'assets/images/products/01-2.png', 'assets/images/products/02-3.png'],
  name: 'pc portable asus',
  price: 800.000,
  ecran: ' 7.1 HD',
  processeur:'i5',
  se:"windows",
  ram:'8GO',
disque:'1 to',
graf:['nvidia'],
clavier:'integré',
couleur:['rouge','blanc'],

},{
  id:'2',
    created_by: {
        name: 'med amine jmini',
        avatar: 'assets/images/avatar.png'
    },
    rating: 4.1,
      feedback: 3,
      tags: [
          'pc',
          'pc portable',
          'asus'
      ],
        images:[
    'assets/images/products/01-1.png', 
    'assets/images/products/01-2.png', 'assets/images/products/02-3.png'],
  name: 'pc portable asus',
  price: 800.000,
  ecran: ' 7.1 HD',
  processeur:'i5',
  se:"windows",
  ram:'8GO',
disque:'1 to',
graf:['nvidia'],
clavier:'integré',
couleur:['rouge','blanc'],

}



];

export const Gamings: Gaming[]= [

{  id:'2',
created_by: {
    name: 'med amine jmini',
    avatar: 'assets/images/avatar.png'
},
rating: 4.1,
  feedback: 3,
  tags: [
      'pc',
      'pc portable',
      'asus'
  ],
  images: ['assets/images/products/03-1.png', 'assets/images/products/03-1.png', 'assets/images/products/03-1.png'],
  name: 'pc portable asus',
  price: 800.000,
  couleur:['rouge','blanc'],
  description:[],

}


];


























