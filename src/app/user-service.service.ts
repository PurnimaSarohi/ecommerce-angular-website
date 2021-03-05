import { Injectable } from '@angular/core';
import { HttpParams, HttpHeaders, HttpClient } from '@angular/common/http';
//import { Headers} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private htttp:HttpClient) { }

  getData()
  {        

    let url ="https://fakestoreapi.com/products/category/women clothing";  
    return this.htttp.get(url,this.httpOptions);
  }
  
  postData(data:any)
  {
    let url ="https://fakestoreapi.com/products";
    return this.htttp.post(url, JSON.stringify(data), this.httpOptions)
  }

  fetchData()
  {        

    let url ="https://fakestoreapi.com/products/1";  
    return this.htttp.get(url,this.httpOptions);
  }

  DeleteData()
  {        

    let url ="https://fakestoreapi.com/products/1";  
    return this.htttp.delete(url,this.httpOptions)
  }

httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  })
}
}
