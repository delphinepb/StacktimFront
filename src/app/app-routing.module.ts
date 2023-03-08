import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppComponent} from "./app.component";
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {ListConnaissanceComponent} from "./login/list-connaissance/list-connaissance.component";


const routes: Routes = [
  { path: '', component: AppComponent },
  {path:'login', component: LoginComponent},
  {path:'listCo', component: ListConnaissanceComponent}
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
