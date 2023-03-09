import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Products } from './products/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  carritoCompras!: Products[]
  private API_URL = "https://dummyjson.com/products";

  constructor( public http: HttpClient) { }

  public getProducts(): Observable<any>{
    return this.http.get(this.API_URL);
  }


  saveProduct(product: any){
    this.carritoCompras.push(product);
  }

  getCarritoCompras(){
    return this.carritoCompras;
  }
}
