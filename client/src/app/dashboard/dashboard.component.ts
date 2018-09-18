import { Component, OnInit } from '@angular/core';
import { WebServiceService } from '../services/web-service.service';
import { Event } from '../models/Event';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  eventList: Event []; 

  constructor(private WebService: WebServiceService) { }

  ngOnInit() {
    //Retreives events from the API
    this.WebService.getAllEvents().subscribe(events => {     
      this.eventList = events;
      console.log(this.eventList);
    });
  }

}
