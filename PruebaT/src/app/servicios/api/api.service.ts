import { Injectable } from '@angular/core';
import { LoginI } from 'src/app/Modelos/login.interface';
import { ResponseI } from 'src/app/Modelos/response.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { sensorI } from 'src/app/Modelos/Sensor.interface';
import { PlatformI } from 'src/app/Modelos/Platform.interface';
import { recordI } from 'src/app/Modelos/record.interface';

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

  getPlatform(pagne:number, Size:number, fleet:number): Observable<[]>{
    let direccion = this.url + 'api/Platforms?pageNumber=' + pagne + '&pageSize=' + Size + '&fleet=Flota ' + fleet;
    const headers = new HttpHeaders({
      'content-type': 'application/json',
      'authorization': 'Bearer ' + localStorage.getItem('token')
    });
    return this.http.get<[]>(direccion , {headers});
  }
  getPlatformById(id:string | null): Observable<[]>{
    let direccion = this.url + 'api/Platforms/' + id;
    const headers = new HttpHeaders({
      'content-type': 'application/json',
      'authorization': 'Bearer ' + localStorage.getItem('token')
    });
    return this.http.get<[]>(direccion , {headers});
  }
  getRecords(id:string,Size:number): Observable<[]>{
    let direccion = this.url +'api/Records/' + id + '?pageSize=' + Size ;
    const headers = new HttpHeaders({
      'content-type': 'application/json',
      'authorization': 'Bearer ' + localStorage.getItem('token')
    });
    return this.http.get<[]>(direccion , {headers});
  }
}
