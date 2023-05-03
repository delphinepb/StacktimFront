import { Component, OnInit } from '@angular/core';
import { ConnaissanceService} from "../services/connaissance.service";
import {environment} from "../../environments/environment";
import {ActivatedRoute} from "@angular/router";
import {RessourceService} from "../services/ressource.service";

@Component({
  selector: 'app-connaissance',
  templateUrl: './connaissance.component.html',
  styleUrls: ['./connaissance.component.css']
})

export class ConnaissanceComponent implements OnInit {

  ressources:any;
  selectedConnaissance : any;
  private urlgetbyidco = environment.apis.ressources.urlbyidco;
  constructor( private connaissanceService:ConnaissanceService, private ressourceService :RessourceService) { }

  ngOnInit(): void {
    this.selectedConnaissance = history.state.selectedConnaissance;
    if (this.selectedConnaissance) {
    this.connaissanceService.getConnaissance(this.selectedConnaissance.nom).subscribe(data => {
      this.selectedConnaissance = data
    })};
    this.ressourceService.getRessourcesByIdco(this.selectedConnaissance.idConnaissance).subscribe(
      ressources => {
        this.ressources = ressources;
      }
    )
  }
  getRessByidCo(id:number):void {
    this.ressourceService.getRessourcesByIdco(id)
      .subscribe(
        ressources => {
          this.ressources = ressources;
        }
      );
  }

}
