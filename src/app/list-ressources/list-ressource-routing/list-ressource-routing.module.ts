import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ListRessourcesComponent} from "../list-ressources.component";

const routes: Routes = [
  {path: '', component: ListRessourcesComponent},
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListRessourceRoutingModule { }
