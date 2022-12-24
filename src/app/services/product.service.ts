import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Iproductform } from '../models/iproductform';
import { Iproductformproperties } from '../models/iproductformproperties';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private serviceUrl: string;

  constructor(private httpClient: HttpClient) {
    this.serviceUrl = "/";
  }

  public getAllProducts(): Observable<any> {

    return this.httpClient.get(this.serviceUrl + "products");
  }

  public saveNewProduct(iproductform : Iproductform) : Observable<any> {
    return this.httpClient.post(this.serviceUrl + "products", iproductform);
  }

  public loadFormProperties() : Observable<any> {
    return this.httpClient.get(this.serviceUrl + "products/form");
  }
}