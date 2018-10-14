import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';
import { Router, NavigationExtras } from '@angular/router';
import { UserData } from '../models/userData';
import { ToastrService } from '../services/toastr.service';
import { Event } from '../models/Event';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  eventList: Event []; //contains array of events to be added in dashboard
  IsAdmin: boolean; //store if admin or not 
  registeredList: any; //contains list of events registered by the user
  showEvents: boolean= false; //check if to show user registered events
  user: String; //used to store the username
  userData: UserData = {
    userID: '',
    firstName: ''
  }; //used to fetch the events registered to the user. 
  
  constructor(private eventService: EventService, private router: Router, private showMessage: ToastrService) {
    this.IsAdmin = localStorage.getItem('IsAdmin').toLowerCase() =='true' ? true : false;    
  }

  ngOnInit() {
    this.user = localStorage.getItem('firstName');
    this.getAllEvents();
    this.getUserEvents();
  }

  //Get all the events from the server API
  getAllEvents() {  
    this.eventService.getEvents().subscribe(events => { 
      this.eventList = events;
    });
  }

  //get events registered to by the user
  getUserEvents() {
    this.userData.firstName = localStorage.getItem('firstName');
    this.userData.userID = localStorage.getItem('userID');
    this.eventService.getUserEvents(this.userData).subscribe(events => {
      if(events) {
        this.registeredList = events;
        this.showEvents=true;
      }
      else {
        this.showEvents=false;
      }
    });
  }

  //Navigate to a Events page to display event details.
  eventDetails(eventID: string) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        "eventID": eventID
      }
    };
    this.router.navigate(['/events'], navigationExtras);
  }

  //Update an Event, can be only used from admin Ids
  updateEvent(eventID: string){    
    let navigationExtras: NavigationExtras = {
      queryParams: {
        "eventID": eventID
      }
    };
    this.router.navigate(['/eventEdit'], navigationExtras);
  }

  //fetch event id for deletion, this is called from the dashboard html 
  selectForDeletion(eventID: string)
  {    
    localStorage.setItem("eventID", eventID);    
  }
  
 //Delete an event, this can be only called from an admin ids
  deleteEvent() {    
    const _id = localStorage.getItem("eventID");
    this.eventService.deleteEvent(_id).subscribe(data => {
      let message = data;
      if(message=='success') {
        localStorage.removeItem("eventID");
        this.showMessage.showSuccess("Event deleted successfully");
        this.getAllEvents();
      }
      else {
        this.showMessage.showError("Event you trying to delete does not exist");
      }
    }, err => {
      this.showMessage.showError(err);
    });
  }
}
