import { Component, OnInit } from '@angular/core';
import { WebServiceService } from '../services/web-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  events: any = [];

  constructor(private WebService: WebServiceService) { }

  ngOnInit() {
    //Retreives events from the API
    this.WebService.getAllEvents().subscribe(events => {
      this.events = events;
    });
  }

}
