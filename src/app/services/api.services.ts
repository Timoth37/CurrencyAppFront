import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Currency} from "../models/currency.model";
import {CookieService} from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})

export class ApiServices {
  constructor(private http: HttpClient, private cookieService: CookieService) {}

  async login(data: any){
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const options = {
      method: 'POST',
      body: JSON.stringify(data),
      headers
    };
    const response = await fetch('http://localhost:3000/login', options);
    return response.json();
  }


  async register(data: any){
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json');
    await this.http.post(`http://localhost:3000/register`, JSON.stringify(data), {headers: headers})
      .subscribe();
  }


  getCurrencies(): Observable<Currency[]>{
    const jwt = this.cookieService.get('jwt')
    let headers = new HttpHeaders();
    if(jwt) {
      headers = new HttpHeaders({
        'Authorization':  `Bearer ${jwt}`
      })
    }
    return this.http.get<any>(`http://localhost:3000/currency/findAll`, {headers: headers})
  }

  getHistory(): Observable<any[]>{
    const jwt = this.cookieService.get('jwt')
    let headers = new HttpHeaders();
    if(jwt) {
      headers = new HttpHeaders({
        'Authorization':  `Bearer ${jwt}`
      })
    }
    return this.http.get<any>(`http://localhost:3000/currency/findAll`, {headers: headers})
  }

  async translate(data: any){
    const jwt = this.cookieService.get('jwt')
    let headers = new HttpHeaders();
    if(jwt){
      headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization':  `Bearer ${jwt}`
      })
    }
    return this.http.post(`http://localhost:3000/currency`, JSON.stringify(data), {headers: headers})
      .subscribe();
  }
}
