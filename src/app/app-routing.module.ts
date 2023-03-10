import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppComponent} from "./app.component";
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {ListConnaissanceComponent} from "./list-connaissance/list-connaissance.component";
import {NavbarVerticalComponent} from "./navbar-vertical/navbar-vertical.component";


const routes: Routes = [
  { path: '', component: AppComponent },
  {path:'login', component: LoginComponent},
  {path:'listeCo', loadChildren: () =>
      import('./list-connaissance/list-connaissance/list-connaissance.module').then(mod => mod.ListConnaissanceModule)},
  {path:'nav', component:NavbarVerticalComponent}
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
