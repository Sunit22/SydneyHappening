import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';
import { Router, NavigationExtras } from '@angular/router';
// import { Event } from '../models/Event';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  eventList: Event []; 
 
  

  constructor(private eventService: EventService, private router: Router) { }

  ngOnInit() {
    //Retreives events from the API
    this.eventService.getEvents().subscribe(events => { 
      this.eventList = events;
      console.log(this.eventList);
    });
  }

  eventDetails(eventID:string){
    let navigationExtras: NavigationExtras = {
            queryParams: {
                "eventID": eventID
            }
        };
    this.router.navigate(['/events'], navigationExtras);
  }
}
