import { Component, OnInit } from '@angular/core';
import { ListConnaissanceService} from "./list-connaissance.service";
import { environment} from "../../environments/environment";

@Component({
  selector: 'app-list-connaissance',
  templateUrl: './list-connaissance.component.html',
  styleUrls: ['./list-connaissance.component.css']
})
export class ListConnaissanceComponent implements OnInit {
  connaissances:any;
  loaded: boolean;
  private url = environment.apis.connaissances.url

  constructor(private listConnaisanceService: ListConnaissanceService) {

    this.loaded = false;
  }
  ngOnInit(): void {
     this.getConnaissances();
  }

  getConnaissances(): void {
    this.loaded = false;
    this.listConnaisanceService.getConnaissances(this.url)
      .subscribe(
        connaissances => {
          this.connaissances = connaissances;
          this.loaded = true;
        });
  }

  resetConnaissances():void{
    this.connaissances=null;
    this.loaded=true;
  }

}
