import { Component, OnInit } from '@angular/core';
import { DiscountOffers } from '../Shared Classes and Types/DiscountOffers';
import { IProduct } from '../Shared Classes and Types/IProduct';

@Component({
  selector: 'app-product-with-out-discount',
  templateUrl: './product-with-out-discount.component.html',
  styleUrls: ['./product-with-out-discount.component.scss']
})
export class ProductWithOutDiscountComponent implements OnInit {

  ProductList: IProduct[] = [];
  Discount:DiscountOffers;

  constructor() {
    this.ProductList = [{ID: 1, Name: 'ABC X230', Quantity: 1, Price: 100,Image:"1.jpg"},
    {ID: 2, Name: 'ABC2 Latitude', Quantity: 2, Price: 200,Image:"1.jpg"},
    {ID: 3, Name: 'Lenovo Tab 2', Quantity: 10, Price: 1000, Image:"1.jpg"}],
    this.Discount = DiscountOffers.NoDiscount;
  }


  ngOnInit(): void {
  }




}
