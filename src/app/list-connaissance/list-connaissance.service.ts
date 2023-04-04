import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {MatDialog} from "@angular/material/dialog";
import {DialogAddComponent} from "../dialog-add/dialog-add.component";

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

  deleteConnaissance(url:string):Observable<object>{
    return this.http.delete(url, httpOtions);
  }
}
