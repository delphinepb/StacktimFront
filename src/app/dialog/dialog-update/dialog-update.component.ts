import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ConnaissanceService} from "../../services/connaissance.service";

@Component({
  selector: 'app-dialog-update',
  templateUrl: './dialog-update.component.html',
  styleUrls: ['./dialog-update.component.css']
})
export class DialogUpdateComponent implements OnInit {
  idCategorie : string | undefined;
  nom: string | undefined;
  categorie: string |undefined;
  descriptionCourte : string | undefined;
  descriptionLongue: string | undefined;

  constructor(private http:HttpClient, private connaissanceService: ConnaissanceService) {


  }

  ngOnInit(): void {

    const data = {
      "idCategorie": this.idCategorie,
      "nom" : this.nom,
      "categorie" : this.categorie,
      "descriptionCourte" : this.descriptionCourte,
      "descriptionLongue":this.descriptionLongue}
  }

}
