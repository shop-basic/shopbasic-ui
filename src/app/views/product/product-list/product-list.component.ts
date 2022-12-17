import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProductList } from '../../../models/iproductlist';
import { ProductService } from '../../../services/product.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  constructor(private productService : ProductService,
              private router: Router) { }
 


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

  onSaveComplete(): void {
    // Reset back to pristine
    // Navigate back to the product list
}
  addNewProduct() : void {
    console.log('hello');
    this.router.navigate(['/products/add']);
  }

}
