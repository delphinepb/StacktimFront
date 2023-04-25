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
  private url = environment.apis.ressources.url;
  constructor( private connaissanceService:ConnaissanceService, private ressourceService :RessourceService) { }

  ngOnInit(): void {
    this.selectedConnaissance = history.state.selectedConnaissance;
    if (this.selectedConnaissance) {
    this.connaissanceService.getConnaissance(this.selectedConnaissance.nom).subscribe(data => {
      this.selectedConnaissance = data
    })}

    this.getAllRessources();
  }

  getAllRessources(): void {
    this.ressourceService.getRessources(this.url)
      .subscribe(
        ressources => {
          this.ressources = ressources;

        });
  }

}
