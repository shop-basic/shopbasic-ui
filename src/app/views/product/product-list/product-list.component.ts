import { Component, OnInit } from '@angular/core';
import { IProductList } from '../../../models/iproductlist';
import { ProductService } from '../../../services/product.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  constructor(private productService : ProductService) { }
 


  public products: IProductList[] = [];

  ngOnInit(): void {
    this.initializeProductList();
  }

  initializeProductList() : void {
    this.productService.getAllProducts().subscribe(
      data => {
        this.products = data;
      },
      error => console.log(error)
    )
  }

}
