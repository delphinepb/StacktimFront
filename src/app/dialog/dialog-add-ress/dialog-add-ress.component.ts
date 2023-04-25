import { Component, OnInit } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {RessourceService} from "../../services/ressource.service";

@Component({
  selector: 'app-dialog-add-ress',
  templateUrl: './dialog-add-ress.component.html',
  styleUrls: ['./dialog-add-ress.component.css']
})
export class DialogAddRessComponent  {
  idType : number | undefined;
  idCo: number | undefined;
  typeRess: string |undefined;
  datePublication : any | undefined;
  createur: string | undefined;
  contenu: string | undefined;
  constructor(private http:HttpClient, private ressourceService : RessourceService) { }

  postRessource(){
    const url = environment.apis.ressources.urlcreate;
    const data =
      {"idtype":this.idType,
        "idCo":this.idCo,
        "typeRess":this.typeRess,
        "datepublication":this.datePublication,
        "createur":this.createur,
        "contenu":this.contenu
      };

    this.ressourceService.postRessource(url, data).subscribe(response =>
      console.log(response))
    console.log(data)
  }


}
