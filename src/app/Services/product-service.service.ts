import { Injectable } from '@angular/core';
import { IProduct } from '../SharedClassesandtypes/Iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService  {

  constructor() { }ProductList:IProduct[]=[
    { ID: 1, Name: " Dell" , Quantity: 6 , Price:9990 , Img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzMMs2bbmUV31g50oYLpV3MbcsXXDECKm_hA&usqp=CAU"},
    { ID: 2, Name: "Lonovo" , Quantity: 8 , Price:8880 , Img:"2.jpg"},
    { ID: 3, Name: "HP" , Quantity: 5 , Price:10090 , Img:"3.jpg"},
    { ID: 4, Name: "Sony" , Quantity: 9 , Price:4290 , Img:"4.jpg"},
    { ID: 5, Name: "Redmi" , Quantity: 7 , Price:5480 , Img:"5.jpg"},
    { ID: 6, Name: "Samsung" , Quantity: 10 , Price:6590 , Img:"6.jpg"}
   ];
   GetAllProducts()
  {
    return this.ProductList;
  }getProductByID(pID:number)
  {
    if(typeof(pID)=='number')
    {
for(var pro of this.ProductList)
{
  if(pro.ID==pID)
  return pro;
}
return null;

    }
    return null;
  } 
}
