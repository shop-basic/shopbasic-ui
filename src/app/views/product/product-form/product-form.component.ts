import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  errorMessage : string;

  constructor(private router : Router) { 
    this.errorMessage = "";
  }
 
  ngOnInit(): void {
  }

  cancel() : void {
    this.router.navigate(['/products']);
  }

  saveProduct() : void {
    
  }

}
