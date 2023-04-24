import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {MatDialog} from "@angular/material/dialog";

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
    const url = `https://localhost:7219/DeleteRessource/${id}`
    return this.http.delete(url);
  }
}
