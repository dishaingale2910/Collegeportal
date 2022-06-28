import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactusService {
  getDeta() {
    throw new Error('Method not implemented.');
  }

  constructor(private httpClient:HttpClient) { }

  storeContact(data:any){
    return this.httpClient.post('http://127.0.0.1:8000/api/storeContact' ,data);
  }
}
