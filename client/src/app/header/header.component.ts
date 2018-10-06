import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  loginStatus:Boolean;
  constructor() {
    if(localStorage.getItem('token')) {
      this.loginStatus = true;
    }
    else 
      this.loginStatus = false;
   }

  ngOnInit() {
  }

}
