import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';
// import { Event } from '../models/Event';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  eventList: Event []; 

  constructor(private eventService: EventService) { }

  ngOnInit() {
    //Retreives events from the API
    this.eventService.getAllEvents().subscribe(events => {     
      this.eventList = events;
      console.log(this.eventList);
    });
  }

}
