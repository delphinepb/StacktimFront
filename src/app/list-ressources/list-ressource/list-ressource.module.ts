import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from "@angular/material/table";
import {ListRessourcesComponent} from "../list-ressources.component";
import {ListRessourceRoutingModule} from "../list-ressource-routing/list-ressource-routing.module";



@NgModule({
  declarations: [ListRessourcesComponent],
  imports: [
    CommonModule,
    ListRessourceRoutingModule,
    MatTableModule
  ],
  exports:[ListRessourcesComponent],
  providers:[],
})
export class ListRessourceModule { }
