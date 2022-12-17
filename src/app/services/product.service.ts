import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private serviceUrl: string;

  constructor(private httpClient: HttpClient) {
    this.serviceUrl = "http://localhost:8080/";
  }

  public getAllProducts(): Observable<any> {

    return this.httpClient.get(this.serviceUrl + "products");
  }
}