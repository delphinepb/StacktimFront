import { Component, OnInit } from '@angular/core';
import { ListConnaissanceService} from "./list-connaissance.service";
import { environment} from "../../environments/environment";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {DialogAddComponent} from "../dialog-add/dialog-add.component";
import {DialogDeleteComponent} from "../dialog-delete/dialog-delete.component";

@Component({
  selector: 'app-list-connaissance',
  templateUrl: './list-connaissance.component.html',
  styleUrls: ['./list-connaissance.component.css']
})
export class ListConnaissanceComponent implements OnInit {
  connaissances:any;
  loaded: boolean;
  selectedConnaissance : any;
  private url = environment.apis.connaissances.url

  constructor(private listConnaisanceService: ListConnaissanceService, private router :Router, private dialog: MatDialog) {

    this.loaded = false;
  }
  ngOnInit(): void {
     this.getAllConnaissances();
  }

  ouvrirDialogAdd(){
    const dialogRef = this.dialog.open(DialogAddComponent, {
      width: '700px',
      height: '600px',
    });
  }

  ouvrirDialogDelete(){
    const dialogRef = this.dialog.open(DialogDeleteComponent, {
      width: '400px',
      height: '130px',
    });
  }

  getAllConnaissances(): void {
    this.loaded = false;
    this.listConnaisanceService.getAllConnaissances(this.url)
      .subscribe(
        connaissances => {
          this.connaissances = connaissances;
          this.loaded = true;
        });
  }

  showDetails(co: any){
    this.selectedConnaissance =  co;
    this.router.navigate(['/connaissance'],{state:{selectedConnaissance:co}});
  }


}
