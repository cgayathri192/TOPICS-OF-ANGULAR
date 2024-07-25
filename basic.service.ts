import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BasicService {

  constructor(private http:HttpClient) { }
  get(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }
}
