import { Component, OnInit } from '@angular/core';
import { ConnaissanceService} from "./connaissance.service";

@Component({
  selector: 'app-connaissance',
  templateUrl: './connaissance.component.html',
  styleUrls: ['./connaissance.component.css']
})
export class ConnaissanceComponent implements OnInit {

  Uneconnaissance:any;
  constructor( private connaissanceService:ConnaissanceService) { }

  ngOnInit(): void {
    this.getConnaissance();}

  getConnaissance():void{
    this.connaissanceService.getConnaissance('https://localhost:7219/GetConnaissancebyNom/')
      .subscribe(
        connaissance => {
          this.Uneconnaissance = connaissance;
        }
      )
  }

}
