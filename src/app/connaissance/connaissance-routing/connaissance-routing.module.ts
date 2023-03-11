import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConnaissanceComponent} from "../connaissance.component";
import {Routes,RouterModule} from "@angular/router";


const routes : Routes = [
  { path:'', component:ConnaissanceComponent}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConnaissanceRoutingModule { }
