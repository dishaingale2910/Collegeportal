import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BooklistdataService {

  constructor(private httpClient:HttpClient) { }

  getData(){
    return this.httpClient.get('http://127.0.0.1:8000/api/booklists');
  }

  insertData(data:any){
    return this.httpClient.post('http://127.0.0.1:8000/api/addBooklist' ,data);
  }

  deleteDate(id) {
    return this.httpClient.delete('http://127.0.0.1:8000/api/deleteBooklist/'+id);
  }

  getNoticById(id){
    return this.httpClient.get('http://127.0.0.1:8000/api/booklist/'+id);
  }
}
