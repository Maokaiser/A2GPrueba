import { Injectable } from '@angular/core';
import { LoginI } from 'src/app/Modelos/login.interface';
import { ResponseI } from 'src/app/Modelos/response.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url:string = 'https://devtest.a2g.io/';
  constructor( private http : HttpClient) { }

  onLogin(form: LoginI) : Observable<ResponseI>{
    let direccion = this.url + 'api/Auth';
    return this.http.post<ResponseI>(direccion, form);
  }
}
