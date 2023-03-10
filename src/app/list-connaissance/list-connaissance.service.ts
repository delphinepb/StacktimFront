import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

const httpOtions = {
  headers: new HttpHeaders(
    {
      'Content-Type': 'application/json',
    }
  )
}
@Injectable({
  providedIn: 'root'
})

export class ListConnaissanceService {

  constructor(private http: HttpClient) { }

  getConnaissances(url:string):Observable<object>{
    return this.http.get(url, httpOtions);
  }
}
