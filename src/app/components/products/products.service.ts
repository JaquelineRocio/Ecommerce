import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private API_URL = "https://dummyjson.com/products";

  constructor( public http: HttpClient) { }

  public getProducts(): Observable<any>{
    return this.http.get(this.API_URL);
  }
}
