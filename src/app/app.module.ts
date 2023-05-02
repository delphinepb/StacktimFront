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
import {ListConnaissanceService} from "./services/list-connaissance.service";
import { ConnaissanceComponent } from './connaissance/connaissance.component';
import {MatDialogModule} from "@angular/material/dialog";
import { DialogAddComponent } from './dialog/dialog-add/dialog-add.component';
import { DialogDeleteComponent } from './dialog/dialog-delete/dialog-delete.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ListRessourcesComponent } from './list-ressources/list-ressources.component';
import { DialogAddRessComponent } from './dialog/dialog-add-ress/dialog-add-ress.component';
import { DialogUpdateComponent } from './dialog/dialog-update/dialog-update.component';
import { RessourceComponent } from './ressource/ressource.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarVerticalComponent,
    DialogAddComponent,
    DialogDeleteComponent,
    DialogAddRessComponent,
    DialogUpdateComponent,

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
    ReactiveFormsModule,
  ],
  providers: [ListConnaissanceService],
  exports: [
    NavbarVerticalComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
