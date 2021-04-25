import { Component, OnInit } from '@angular/core';
import {DiscountOffers } from '../SharedClassesandtypes/DiscountOffers';
import { IProduct, } from '../SharedClassesandtypes/Iproduct';
import {ICategory,} from '../SharedClassesandtypes/Icategory';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }
  StoreName:string="Book store";
  StoreLogo:string="https://i.pinimg.com/originals/bb/d2/d4/bbd2d45541567d4b8f96afe6d53198c1.png"; 
  ClientName:string="rasha";
  IsPurshased=true;
   public Disscount: typeof DiscountOffers.Second_Disscount = DiscountOffers.Second_Disscount;
   public Disscount1: typeof DiscountOffers.First_Disscount =  DiscountOffers.First_Disscount;  
   public Disscount2: typeof DiscountOffers.Third_Disscount =  DiscountOffers.Third_Disscount;
   public ProductList:IProduct[] = [ { ID: 1, Name: " Dell" , Quantity: 6 , Price:9990 , Img:"1.jpg"},
   { ID: 2, Name: "Lonovo" , Quantity: 8 , Price:8880 , Img:"2.jpg"},
   { ID: 3, Name: "HP" , Quantity: 5 , Price:10090 , Img:"3.jpg"},
   { ID: 4, Name: "Sony" , Quantity: 9 , Price:4290 , Img:"4.jpg"},
   { ID: 5, Name: "Redmi" , Quantity: 7 , Price:5480 , Img:"5.jpg"},
   { ID: 6, Name: "Samsung" , Quantity: 10 , Price:6590 , Img:"6.jpg"}];
   public CategoryList: ICategory[] = [ 

    { ID: 1, Name: "Laptob" },
    { ID: 2, Name: "Mopile" },
    { ID: 3, Name: "Heater" },
    { ID: 4, Name: "Tv" },
    { ID: 5, Name: "Fans" },
    { ID: 6, Name: "Fridges" }
   
  ];
  ngOnInit(): void {
  }
Buy(){
  if(this.IsPurshased==true)
  {
    this.IsPurshased=false;
  }
  else
  {
    this.IsPurshased=true;
  }
}
}
