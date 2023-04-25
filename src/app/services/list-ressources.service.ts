import { Injectable } from '@angular/core';
import {catchError, Observable, throwError} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {MatDialog} from "@angular/material/dialog";
import {environment} from "../../environments/environment";

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
export class ListRessourcesService {

  constructor(private http: HttpClient, private dialog :MatDialog) { }

  getAllRessources(url:string):Observable<object>{
    return this.http.get(url, httpOtions);
  }


  deleteRessource(id:number):Observable<any>{
    const url = `${environment.apis.ressources.urldelete}/${id}`;
    return this.http.delete(url).pipe(
      catchError(erreur => {
        console.log('une erreur est survenue lors de la suppression de la connaissance:', erreur);
        return throwError(erreur);
      })
    );
  }
}
