import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  isLogged = true;
  baseUrl = "http://localhost:3000/";
  constructor(private http : HttpClient) { }

  apiGet = (link) => {
    return this.http.get(this.baseUrl+link);
  }

  apiPost = (link, data) => {
    return this.http.post(this.baseUrl+link, data);
  }

}
