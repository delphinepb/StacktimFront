import { Component, OnInit } from '@angular/core';
import { ListConnaissanceService} from "./list-connaissance.service";
import { environment} from "../../environments/environment";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {DialogAddComponent} from "../dialog/dialog-add/dialog-add.component";
import {DialogDeleteComponent} from "../dialog/dialog-delete/dialog-delete.component";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-list-connaissance',
  templateUrl: './list-connaissance.component.html',
  styleUrls: ['./list-connaissance.component.css']
})
export class ListConnaissanceComponent implements OnInit {
  connaissances:any;
  loaded: boolean;
  selectedConnaissance : any;
  private url = environment.apis.connaissances.url;

  constructor(private listConnaisanceService: ListConnaissanceService,
              private router :Router,
              private dialog: MatDialog,
              private http : HttpClient) {

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

  ouvrirDialogDelete(i:number){
    /*this.dialog.open(DialogDeleteComponent, {
      width: '400px',
      height: '130px',
    });*/
  this.deleteConnaissance(i);
  }

  deleteConnaissance(id:number){
    this.listConnaisanceService.deleteConnaissance(id).subscribe(()=>{
      const index = this.connaissances.findIndex((d: { id: number; }) => d.id === id);
      this.connaissances.splice(index,1);
      }
    )
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
