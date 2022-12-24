import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Iproductform } from 'src/app/models/iproductform';
import { Iproductformproperties } from 'src/app/models/iproductformproperties';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  errorMessage : string;

  formProperties : Iproductformproperties ={
    categories : [],
    manufacturers : []
  };

  productForm : Iproductform = { 
      name : "",
      categoryId : "",
      manufacturerId : "",
      description : ""
  }

  constructor(private router : Router,
    private productService : ProductService) { 
    this.errorMessage = "";
  }
 
  ngOnInit(): void {
    this.initializeFormProperties();
  }

  initializeFormProperties() : void {
    this.productService.loadFormProperties().subscribe(
      data => {
        this.formProperties = data;
      },
      error => console.log(error)
    )
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
