import { Component } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {ConnaissanceService} from "../../services/connaissance.service";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-dialog-add',
  templateUrl: './dialog-add.component.html',
  styleUrls: ['./dialog-add.component.css']
})
export class DialogAddComponent {
  idCategorie : string | undefined;
  nom: string | undefined;
  categorie: string |undefined;
  descriptionCourte : string | undefined;
  descriptionLongue: string | undefined;
  private urlCreate = environment.apis.connaissances.urlcreate;
  constructor(private http:HttpClient,
              private connaissanceService: ConnaissanceService,
              public dialogRef: MatDialogRef<DialogAddComponent>
              ) { }

  postConnaissance(){
    const url = environment.apis.connaissances.urlcreate;
    const data = {"idCategorie": this.idCategorie  ,"nom" : this.nom, "categorie" : this.categorie, "descriptionCourte" : this.descriptionCourte, "descriptionLongue":this.descriptionLongue} ;

    this.connaissanceService.postConnaissance(url, data).subscribe(response =>
    console.log(response))
    console.log(data)
    this.closeDialog();
  }

  closeDialog():void {
    this.dialogRef.close('resultat');
  }


}
