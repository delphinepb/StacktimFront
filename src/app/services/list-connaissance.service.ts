import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, observable, Observable, throwError} from "rxjs";
import {MatDialog} from "@angular/material/dialog";
import {DialogAddComponent} from "../dialog/dialog-add/dialog-add.component";
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

export class ListConnaissanceService {
  constructor(private http: HttpClient, private dialog :MatDialog) { }
  getAllConnaissances(url:string):Observable<object>{
    return this.http.get(url, httpOtions);
  }


  deleteConnaissance(id:number):Observable<any>{
    const url = `${environment.apis.connaissances.urldelete}/${id}`;
    return this.http.delete(url).pipe(
      catchError(erreur => {
        console.log('une erreur est survenue lors de la suppression de la connaissance:', erreur);
        return throwError(erreur);
      })
    );
  }
}
