import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from "@angular/material/table";
import {RessourceComponent} from "../ressource.component";
import {RessourceRoutingModule} from "../ressource-routing/ressource-routing.module";



@NgModule({
  declarations: [RessourceComponent],
  imports: [
    CommonModule,
    RessourceRoutingModule ,
    MatTableModule
  ],
  exports:[
    RessourceComponent
  ],
  providers:[
  ]
})
export class RessourceModule { }
