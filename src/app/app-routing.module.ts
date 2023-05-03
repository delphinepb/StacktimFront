import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {NavbarVerticalComponent} from "./navbar-vertical/navbar-vertical.component";
import {ListConnaissanceComponent} from "./list-connaissance/list-connaissance.component";


const routes: Routes = [
  // { path: '', component: AppComponent },
  {path:'', component: ListConnaissanceComponent},
  {path:'login', component: LoginComponent},
  {path:'listeCo', loadChildren: () =>
      import('./list-connaissance/list-connaissance/list-connaissance.module').then(mod => mod.ListConnaissanceModule)},
  {path:'nav', component:NavbarVerticalComponent},
  {path:'connaissance', loadChildren: () =>
      import('./connaissance/connaissance/connaissance.module').then(mod => mod.ConnaissanceModule)},
  {path:'listeRess', loadChildren : () =>
      import('./list-ressources/list-ressource/list-ressource.module').then(mod => mod.ListRessourceModule)},
  {path:'ressource', loadChildren: () =>
      import('./ressource/ressource/ressource.module').then(mod => mod.RessourceModule)}
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)  ],
  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule { }
