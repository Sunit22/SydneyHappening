import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  
  eventId: string;
  event:Event;

  constructor(private route: ActivatedRoute,private eventService: EventService) {}

  ngOnInit() {
    this.route.queryParams.subscribe(
      params => {this.eventId = params['eventID']})
      
   this.eventService.getEvent(this.eventId).subscribe(event=>{
      this.event = event;
    });    
  }
}
