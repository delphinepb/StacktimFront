import { Component, OnInit } from '@angular/core';
import { ListConnaissanceService} from "../services/list-connaissance.service";
import { environment} from "../../environments/environment";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {DialogAddComponent} from "../dialog/dialog-add/dialog-add.component";
import {DialogUpdateComponent} from "../dialog/dialog-update/dialog-update.component";

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
              private dialog: MatDialog) {

    this.loaded = false;
  }
  ngOnInit(): void {
     this.getAllConnaissances();
  }

  reloadPage() {
    const currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigateByUrl(currentUrl);
    });
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
    this.listConnaisanceService.deleteConnaissance(id).subscribe(response => {
      console.log('Connaissance supprimée avec succès !');
    });
    this.reloadPage();
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

  update(co:any){
    this.selectedConnaissance = co;
    const dialogRef = this.dialog.open(DialogUpdateComponent, {
      width: '700px',
      height: '600px',
    });
  }
}
