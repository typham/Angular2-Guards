import { Injectable } from '@angular/core';
import {HttpClient} from '../common/HttpClient';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {

  urlApi:string = 'http://58ddd2cc91f417120010ab92.mockapi.io/api/products';
  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get(this.urlApi).map(res=>res.json());
  }

  getById(id){
    return this.http.get(`${this.urlApi}/${id}`).map(res=>res.json());
  }

  add(item){
    return this.http.post(this.urlApi,item).map(res=>res.json());
  }

  update(item){
    return this.http.put(`${this.urlApi}/${item.id}`,item).map(res=>res.json());
  }

  delete(id){
    return this.http.delete(`${this.urlApi}/${id}`).map(res=>res.json());
  }
}
