import { Component, OnInit } from '@angular/core';
import { ConnaissanceService} from "./connaissance.service";
import {environment} from "../../environments/environment";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-connaissance',
  templateUrl: './connaissance.component.html',
  styleUrls: ['./connaissance.component.css']
})
export class ConnaissanceComponent implements OnInit {

  Uneconnaissance:any;
  selectedConnaissance : any;
  private url = environment.apis.connaissance.url;
  constructor( private connaissanceService:ConnaissanceService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.selectedConnaissance = history.state.selectedConnaissance;
    if (this.selectedConnaissance) {
    this.connaissanceService.getConnaissance(this.selectedConnaissance.nom).subscribe(data => {
      this.selectedConnaissance = data
    })}
  }

  getConnaissance():void{
    this.connaissanceService.getConnaissance('https://localhost:7219/GetConnaissanceById/')
      .subscribe(
        connaissance => {
          this.Uneconnaissance = connaissance;
        }
      )
  }

}
