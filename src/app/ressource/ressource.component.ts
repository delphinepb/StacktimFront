import { Component, OnInit } from '@angular/core';
import {RessourceService} from "../services/ressource.service";

@Component({
  selector: 'app-ressource',
  templateUrl: './ressource.component.html',
  styleUrls: ['./ressource.component.css']
})
export class RessourceComponent implements OnInit {
  ressources:any;
  selectedRessource : any;
  constructor(private ressourceService :RessourceService) { }

  ngOnInit(): void {
    this.selectedRessource = history.state.selectedConnaissance;
    if (this.selectedRessource) {
      this.ressourceService.getRessource(this.selectedRessource.nom).subscribe(data => {
        this.selectedRessource = data
      })}
  }

}
