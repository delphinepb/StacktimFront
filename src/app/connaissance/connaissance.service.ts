import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable} from "rxjs";

const httpOtions = {
  headers: new HttpHeaders(
    {
      'Content-Type': 'application/json',
    }
  )
}

const httpOptions = {
  headers: new HttpHeaders(
    {
    'Content-Type':'application-json',}
  )
}
@Injectable({
  providedIn: 'root'
})
export class ConnaissanceService {

  constructor(private http: HttpClient) { }

  getConnaissance(url:string):Observable<object>{
    return this.http.get(url, httpOtions);
  }

  getRessources(url:string):Observable<object>{
    return this.http.get(url, httpOptions);
  }

  getProjets(url:string):Observable<object>{
    return this.http.get(url, httpOptions);
  }
}
