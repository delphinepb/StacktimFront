import { Component } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, throwError} from "rxjs";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-dialog-add',
  templateUrl: './dialog-add.component.html',
  styleUrls: ['./dialog-add.component.css']
})
export class DialogAddComponent {
  idc : string | undefined;
  nom: string | undefined;
  cat: string |undefined;
  descC : string | undefined;
  descL: string | undefined;
  private urlCreate = environment.apis.connaissances.urlcreate;
  constructor(private http:HttpClient) { }

  onSubmit(){
    const data = {
      idc: this.idc,
      nom: this.nom,
      cat: this.cat,
      dscC:this.descC,
      dscL : this.descL
    };
    this.http.post(this.urlCreate, data)
      .subscribe(response => {
        console.log('Réponse de l\'API : ', response);
      }, (error: HttpErrorResponse) => {
        // Gérer les erreurs HTTP ici
        console.log('Une erreur s\'est produite : ', error.message);
      });
  }

}
