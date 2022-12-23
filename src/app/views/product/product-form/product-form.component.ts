import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Iproductform } from 'src/app/models/iproductform';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  errorMessage : string;

  productForm : Iproductform = { 
      name : "",
      category : "",
      manufacturer : "",
      description : ""
  }

  constructor(private router : Router,
    private productService : ProductService) { 
    this.errorMessage = "";
  }
 
  ngOnInit(): void {
  }

  cancel() : void {
    this.router.navigate(['/products']);
  }

  saveProduct(form : NgForm) : void {
    
    if(form.valid){
      this.productService.saveNewProduct(this.productForm).subscribe(
        result => console.log(result),
        error => console.log(error)
      );
    } else {
      // this.hasError = true
      this.errorMessage = "Please resolve errors"
    }
    
    this.router.navigate(['/products']);

  }

}
