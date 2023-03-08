import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-list-connaissance',
  templateUrl: './list-connaissance.component.html',
  styleUrls: ['./list-connaissance.component.css']
})

export interface connaissance {
  name : string;
}
const ELEMENT_DATA: connaissance[] = [
  {name: 'Hydrogen'},
  {name: 'Helium'},
];
export class ListConnaissanceComponent {
  displayedColumns: string[] = ['name'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
