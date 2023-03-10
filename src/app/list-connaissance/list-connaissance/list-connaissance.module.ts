import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListConnaissanceComponent} from "../list-connaissance.component";
import  { ListCoRoutingModule} from "../list-co-routing/list-co-routing.module";
import {MatTableModule} from "@angular/material/table";


@NgModule({
  declarations: [ListConnaissanceComponent],
  imports: [
    CommonModule,
    ListCoRoutingModule,
    MatTableModule
  ],
  exports:[ListConnaissanceComponent],
  providers:[],
})
export class ListConnaissanceModule { }
