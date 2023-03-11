import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConnaissanceComponent} from "../connaissance.component";
import {ConnaissanceRoutingModule} from "../connaissance-routing/connaissance-routing.module";
import {MatTableModule} from "@angular/material/table";

@NgModule({
  declarations: [ConnaissanceComponent],
  imports: [
    CommonModule,
    ConnaissanceRoutingModule,
    MatTableModule
  ],
  exports:[
  ConnaissanceComponent
  ],
  providers:[
  ]
})
export class ConnaissanceModule { }
