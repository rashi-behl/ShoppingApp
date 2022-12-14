import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private reqURL="./assets/data/products.json"

  constructor(private http:HttpClient) { }

  getProducts(){
    return this.http.get<any>(this.reqURL)
    .pipe(map((data:any)=>{
      return data;
    }))
  }
}
