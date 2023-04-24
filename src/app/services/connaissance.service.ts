import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {environment} from "../../environments/environment";

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

  postConnaissance(url: string, body:any){
    return this.http.put(url, body).pipe(
      catchError(erreur => {
        console.log('une erreur est survenue lors de l ajout de la connaissance:', erreur);
        return throwError(erreur);
      })
    );
  }

  updateConnaissance(id:number, data:any):Observable<any>{
    const url = `${environment.apis.connaissances.urlupdate}/${id}`
    return this.http.put(url, data);
  }
}
