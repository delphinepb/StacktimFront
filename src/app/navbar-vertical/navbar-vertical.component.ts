import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-vertical',
  templateUrl: './navbar-vertical.component.html',
  styleUrls: ['./navbar-vertical.component.css']
})
export class NavbarVerticalComponent implements OnInit {

  constructor() { }
  isShowing: boolean | undefined;
  toggleSidenav() {
    this.isShowing = !this.isShowing;
  }
  callMethods(){
    this.toggleSidenav();
  }

  ngOnInit(): void {
  }

}
