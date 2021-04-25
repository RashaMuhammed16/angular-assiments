import { Component, OnInit } from '@angular/core';
import { DiscountOffers } from '../Shared Classes and Types/DiscountOffers';
import { IProduct } from '../Shared Classes and Types/IProduct';

@Component({
  selector: 'app-product-with-discount',
  templateUrl: './product-with-discount.component.html',
  styleUrls: ['./product-with-discount.component.scss']
})
export class ProductWithDiscountComponent implements OnInit {
  ProductList: IProduct[] = [];
  Discount:DiscountOffers;

  constructor() {
    this.ProductList = [{ID: 1, Name: 'Lenovo X230', Quantity: 1, Price: 100,Image:"1.jpg"},
    {ID: 2, Name: 'Dell Latitude', Quantity: 2, Price: 200,Image:"1.jpg"},
    {ID: 3, Name: 'Lenovo Tab 2', Quantity: 10, Price: 1000, Image:"1.jpg"},
    {ID: 4, Name: 'IPad', Quantity: 20, Price: 2000, Image:"1.jpg"},
    {ID: 5, Name: 'Smasung S10', Quantity: 30, Price: 300, Image:"1.jpg"},
    {ID: 6, Name: 'Iphone 9', Quantity: 300, Price: 3000, Image:"1.jpg"}];


    this.Discount = DiscountOffers.Discount;


  }


  ngOnInit(): void {
  }

}
