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
import { ListConnaissanceComponent } from './login/list-connaissance/list-connaissance.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarVerticalComponent } from './navbar-vertical/navbar-vertical.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListConnaissanceComponent,
    NavbarVerticalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
