import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";
import {MatButtonModule} from "@angular/material/button";

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { ListConnaissanceComponent } from './list-connaissance/list-connaissance.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarVerticalComponent } from './navbar-vertical/navbar-vertical.component';
import {HttpClientModule} from "@angular/common/http";
import {ListConnaissanceService} from "./list-connaissance/list-connaissance.service";
import { ConnaissanceComponent } from './connaissance/connaissance.component';
import {MatDialogModule} from "@angular/material/dialog";
import { DialogAddComponent } from './dialog/dialog-add/dialog-add.component';
import { DialogDeleteComponent } from './dialog/dialog-delete/dialog-delete.component';
import {FormsModule} from "@angular/forms";
import { ListRessourcesComponent } from './list-ressources/list-ressources.component';
import { DialogAddRessComponent } from './dialog/dialog-add-ress/dialog-add-ress.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarVerticalComponent,
    DialogAddComponent,
    DialogDeleteComponent,
    DialogAddRessComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'angular-starter'}),
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    HttpClientModule,
    MatDialogModule,
    FormsModule,
  ],
  providers: [ListConnaissanceService],
  exports: [
    NavbarVerticalComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
