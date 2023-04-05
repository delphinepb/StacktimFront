import { Component, OnInit } from '@angular/core';
import {environment} from "../../environments/environment";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {HttpClient} from "@angular/common/http";
import {ListRessourcesService} from "./list-ressources.service";
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
  getAllRessources(): void {
    this.listRessourcesService.getAllRessources(this.url)
      .subscribe(
        ressources => {
          this.ressources = ressources;

        });
  }

  deleteRessource(id:number){
    this.listRessourcesService.deleteRessource(id).subscribe(()=>{
        const index = this.ressources.findIndex((d: { id: number; }) => d.id === id);
        this.ressources.splice(index,1);
      }
    )
  }
}
