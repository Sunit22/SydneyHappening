import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
//This component is used to render the not found page.
export class NotFoundComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

}
