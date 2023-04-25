import { Component, OnInit } from '@angular/core';
import {environment} from "../../environments/environment";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {HttpClient} from "@angular/common/http";
import {ListRessourcesService} from "../services/list-ressources.service";
import {DialogAddComponent} from "../dialog/dialog-add/dialog-add.component";
import {DialogAddRessComponent} from "../dialog/dialog-add-ress/dialog-add-ress.component";

@Component({
  selector: 'app-list-ressources',
  templateUrl: './list-ressources.component.html',
  styleUrls: ['./list-ressources.component.css']
})
export class ListRessourcesComponent implements OnInit {

  ressources : any;
  loaded: boolean;
  private url = environment.apis.ressources.url;

  constructor(private listRessourcesService: ListRessourcesService,
              private router :Router,
              private dialog: MatDialog,
              private http : HttpClient) {
    this.loaded = false;
  }

  ngOnInit(): void {
    this.getAllRessources();
  }

  reloadPage() {
    const currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigateByUrl(currentUrl);
    });
  }
  ouvrirDialogAddRessource(){
    const dialogRef = this.dialog.open(DialogAddRessComponent, {
      width: '700px',
      height: '600px',
    });
  }
  getAllRessources(): void {
    this.listRessourcesService.getAllRessources(this.url)
      .subscribe(
        ressources => {
          this.ressources = ressources;

        });
  }


  deleteRessource(id:number){
    this.listRessourcesService.deleteRessource(id).subscribe(response => {
      console.log('Connaissance supprimée avec succès !');
    });
    this.reloadPage();
  }

}
