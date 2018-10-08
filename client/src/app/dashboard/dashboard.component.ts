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
  
  
  eventList: Event []; 
  IsAdmin:boolean;
  registeredList: any;
  showEvents: boolean= false;

  userEventList: Event[];
  userData: UserData = {
    userID: '',
    firstName: ''
  };
  user = '';

  constructor(private eventService: EventService, private router: Router, private showMessage: ToastrService) {
    this.IsAdmin = localStorage.getItem('IsAdmin').toLowerCase() =='true' ? true : false;    
  }

  ngOnInit() {
   this.user = localStorage.getItem('firstName');
   this.getAllEvents();
   this.getUserEvents();
  }

  getAllEvents(){
    //Retreives events from the API    
    this.eventService.getEvents().subscribe(events => { 
      this.eventList = events;
    });
  }

  //get events registered to by user
  getUserEvents() {
    this.userData.firstName = localStorage.getItem('firstName');
    this.userData.userID = localStorage.getItem('userID');
    this.eventService.getUserEvents(this.userData).subscribe( events => {
      if(events){
        this.registeredList = events;
        this.showEvents=true;
      }
      else{
        this.showEvents=false;
      }
    })

  }

//Gets Event by ID
  eventDetails(eventID:string){
    let navigationExtras: NavigationExtras = {
            queryParams: {
                "eventID": eventID
            }
        };
    this.router.navigate(['/events'], navigationExtras);
  }

  //Update Event by Event ID
  updateEvent(eventID:string){    
    let navigationExtras: NavigationExtras = {
      queryParams: {
          "eventID": eventID
      }
  };
    this.router.navigate(['/eventEdit'], navigationExtras);
  }

  selectForDeletion(eventID: string)
  {    
    localStorage.setItem("eventID",eventID);    
  }

  
//Deletes Event by ID
  deleteEvent(){    
    const _id = localStorage.getItem("eventID");
    this.eventService.deleteEvent(_id).subscribe(data=>{
      let message = data;
      if(message=='success')
        {
          localStorage.removeItem("eventID");
          this.showMessage.showSuccess("Event deleted successfully");
          this.getAllEvents();
        }
        else{
          this.showMessage.showError("Event you trying to delete does not exist");
        }
    }, err=> {
      this.showMessage.showError(err);
    });
  }
}
