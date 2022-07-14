export interface created {
  name:string;
  avatar: string;
}
export interface tech {
  ecran:string;
  processeur: string;
 se: string; 
 ram: string; 
 stockage: string; 
 autres: string [];

}

export interface Product {

id: string;
created_by: created;
images:string[];
name: string; 
price: number;
rating:number;
feedback:number;
category: string;
tags: string[]; 
fiche: tech; 

}


export interface Phones {
  id: string;
  created_by: created;
  rating:number;
  feedback:number;
  tags: string[]; 
  //////
 
  images:string[];
  name: string; 
  price: number;
  ecran:string;
  processeur: string;
 se: string; 
 ram: string; 
 stockage: string; 
 cam: string [];
 battrie:string;
 bleutooth:string;
 couleur: string[]; 
  }

  export interface Laptop {
   id: string;
    created_by: created;
  rating:number;
  feedback:number;
  tags: string[]; 
  /////////
    images:string[];
    name: string; 
    price: number; 
    ecran:string;
    processeur: string;
   se: string; 
   ram: string; 
   disque: string; 
   graf: string [];
   clavier: string;
   couleur: string[];  }


   export interface camera {
    
    id: string;
    created_by: created;
    rating:number;
    feedback:number;
    /////////////////
    images:string[];
    name: string; 
    price: string; 
    ecran:string;
    resolution: string[];
   objectif: string; 
   batri: string[]; 
   cable: string; 
   couleur: string; 
}


export interface Gaming {
  
  id: string;
  created_by: created;
  rating:number;
  feedback:number;
  tags: string[];
 ///////////////////
images : string[];
name : string;
price : number ;
couleur: string[]; 
description : string[];

}


// export interface cat {
// phones: Phones;
// laptop:Laptop; 
// camera:camera;
// acc: Acc; 
// }
// export interface produits {
  
//   cat: cat;
//   created_by: created;
//   rating:number;
//   feedback:number;


// }