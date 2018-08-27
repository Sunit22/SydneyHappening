import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
/**
 * This component is displayed for displaying event details. 
 * Currently, our dashboard is hardcoded with mock events,
 * but we would be making changes to fetch the event details as per this component structure from database in further updates.
 */
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  
  eventId: string;
  constructor(private route: ActivatedRoute) { 
    this.route.queryParams.subscribe(
      params => {this.eventId = params['eventId']})
  }

  ngOnInit() {
  }

}
