import { Component } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {ConnaissanceService} from "../../services/connaissance.service";

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
  constructor(private http:HttpClient, private connaissanceService: ConnaissanceService) { }

  postConnaissance(){
    const url = environment.apis.connaissances.urlcreate;
    const data = {"idCategorie": this.idCategorie  ,"nom" : this.nom, "categorie" : this.categorie, "descriptionCourte" : this.descriptionCourte, "descriptionLongue":this.descriptionLongue} ;

    this.connaissanceService.postConnaissance(url, data).subscribe(response =>
    console.log(response))
    console.log(data)
  }

}
