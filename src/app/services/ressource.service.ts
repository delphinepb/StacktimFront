import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";

const httpOptions = {
  headers: new HttpHeaders(
    {
      'Content-Type':'application-json',}
  )
}
@Injectable({
  providedIn: 'root'
})
export class RessourceService {

  constructor(private http : HttpClient) { }

  getRessource(url:string):Observable<object>{
    return this.http.get(url, httpOptions);
  }

  getRessourcesByIdco(url:string):Observable<object>{
    return this.http.get(url, httpOptions);
  }

  postRessource(url: string, body:any){
    return this.http.put(url, body).pipe(
      catchError(erreur => {
        console.log('une erreur est survenue lors de l ajout de la ressource:', erreur);
        return throwError(erreur);
      })
    );
  }
}
