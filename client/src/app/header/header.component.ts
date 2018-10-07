import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  
  checkIfLoggedIn() {
    if(localStorage.getItem('token')) {
      return true;
    }
    else 
      return false;
  }

  logout() {
    console.log("inside logout");
    localStorage.clear();
    console.log(localStorage.getItem('token'));
  }
  constructor() { }

  ngOnInit() {
  }

}
