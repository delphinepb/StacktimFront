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
export class RessourceService {

  constructor(private http : HttpClient) { }

  getRessource(url:string):Observable<object>{
    return this.http.get(url, httpOptions);
  }

  getRessourcesByIdco(id:number):Observable<object>{
    const url = `${environment.apis.ressources.urlbyidco}/${id}`;
    return this.http.get(url).pipe(
      catchError(erreur => {
        console.log('une erreur est survenue lors de la récupération de la ressource', erreur);
        return throwError(erreur);
      })
    );
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
