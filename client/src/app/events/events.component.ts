import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras  } from '@angular/router';
import { EventService } from '../services/event.service';
import { Event } from '../models/Event';
import { UserEventRegister } from '../models/UserEventRegister';
import { ToastrService } from '../services/toastr.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  
  eventId: string;
  event: Event = {
    _id: '',
    name: '',
    venue: '',
    date: '',
    time: '',
    seats: 0,
    createdBy: ''
  };

  userEvent: UserEventRegister = {
    userID: '',
    eventID: ''
  };

  constructor(private route: ActivatedRoute,private eventService: EventService, private router: Router,
    private showMessage: ToastrService) {}

  ngOnInit() {
    this.route.queryParams.subscribe(
      params => {this.eventId = params['eventID']})
      
   this.eventService.getEvent(this.eventId).subscribe(event=>{
      this.event = event;
    });    
  }

  registerToAttend() {
    this.userEvent.userID = localStorage.getItem('userID');
    this.userEvent.eventID = this.event._id;
    this.eventService.registerToAttend(this.userEvent).subscribe( response => {
    this.showMessage.showSuccess("You have successfully registered for the event!");
    this.router.navigate(['/dashboard']);
    },
      err=>{});
  }
  
}
