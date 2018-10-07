import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';
import { Router, NavigationExtras } from '@angular/router';

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
  

  constructor(private eventService: EventService, private router: Router, private showMessage: ToastrService) {
    this.IsAdmin = localStorage.getItem('IsAdmin').toLowerCase() =='true' ? true : false;    
  }

  ngOnInit() {
   this.getAllEvents();
  }

  getAllEvents(){
    //Retreives events from the API    
    this.eventService.getEvents().subscribe(events => { 
      this.eventList = events;
      console.log(this.eventList);
    });
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
  
//Deletes Event by ID
  deleteEvent(_id:string){
    console.log(_id);
    this.eventService.deleteEvent(_id).subscribe(data=>{
      console.log(data);
      let message = data;
      if(message=='success')
        {
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
