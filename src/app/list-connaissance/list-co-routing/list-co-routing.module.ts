import { NgModule } from '@angular/core';
import {Routes, RouterModule} from "@angular/router";
import {ListConnaissanceComponent} from "../list-connaissance.component";

const routes: Routes = [
  {path: '', component: ListConnaissanceComponent},
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListCoRoutingModule { }
