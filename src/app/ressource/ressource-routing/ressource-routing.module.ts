import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {RessourceComponent} from "../ressource.component";


const routes : Routes = [
  { path:'', component:RessourceComponent}
]
@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RessourceRoutingModule { }
