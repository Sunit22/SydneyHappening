import { Component, OnInit } from '@angular/core';
/**
 * Modify this component to change header.
 * This component would be used to place a header on all the pages. 
 * We have created a separate component of header for ease of use in changes. 
 * 
 */
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
