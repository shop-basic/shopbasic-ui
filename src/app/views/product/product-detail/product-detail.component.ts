import { Component, OnInit } from '@angular/core';
import { Iproduct } from 'src/app/models/iproduct';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  public product: Iproduct = 
    {
      name :'Product 1',
      price : 100,
      packagingQuantity : 1,
      availableQuantity : 100,
      unit :'lt.',
      activeFlag: true,
      manufacturer: 'Manufacturer 1',
      avatar : './assets/img/avatars/1.jpg',
      productId : 'P1',
    };

    public products: Iproduct[] = [
      {
        name :'Product 1',
        price : 100,
        packagingQuantity : 500,
        availableQuantity : 50,
        unit :'ml',
        activeFlag: true,
        manufacturer: 'Manufacturer 1',
        avatar : './assets/img/avatars/1.jpg',
        productId : 'P1',
      },
      {
        name :'Product 1',
        price : 100,
        packagingQuantity : 1,
        availableQuantity : 100,
        unit :'lt',
        activeFlag: true,
        manufacturer: 'Manufacturer 1',
        avatar : './assets/img/avatars/1.jpg',
        productId : 'P1',
      },
      {
        name :'Product 1',
        price : 100,
        packagingQuantity : 2,
        availableQuantity : 200,
        unit :'lt',
        activeFlag: true,
        manufacturer: 'Manufacturer 1',
        avatar : './assets/img/avatars/1.jpg',
        productId : 'P1',
      },
      {
        name :'Product 1',
        price : 100,
        packagingQuantity : 10,
        availableQuantity : 1000,
        unit :'lt',
        activeFlag: true,
        manufacturer: 'Manufacturer 1',
        avatar : './assets/img/avatars/1.jpg',
        productId : 'P1',
      }
    ]
  
  constructor() { }

  ngOnInit(): void {
  }

}
