import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';
import { Router, NavigationExtras } from '@angular/router';
import { ToastrService } from '../services/toastr.service';

@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.component.html',
  styleUrls: ['./event-create.component.css']
})
export class EventCreateComponent implements OnInit {

  constructor(private eventService : EventService,private router: Router,private showMessage:ToastrService) { }

  isBusy:boolean= false;

  ngOnInit() {
  }

  addEvent(eventData) {
   this.isBusy=true;
    var eventInfo = {
      EventName: eventData.value.eventName,
      EventVenue: eventData.value.eventVenue,
      EventDate: this.getFormattedDate(eventData.value.eventDate),
      EventTime: this.getFormattedTime(eventData.value.eventTime),
      AvailableSeats: eventData.value.availableSeats,
      CreatedBy: localStorage.getItem('email')
    };
    this.eventService.addEvent(eventInfo).subscribe(event => {
      if(event == "success"){
        this.getAllEvents();
        this.showMessage.showSuccess("Event added successfully");
      }
      else {
        this.showMessage.showError("Failed to save your event");
      }
      this.isBusy=false;
    });
   
  }

  getAllEvents(){
    this.eventService.getEvents().subscribe(events => {
      this.router.navigate(['/dashboard']);
    })
  }

  getFormattedDate(date){
    var formattedDate = new Date(date)
    var day = formattedDate.getDate();
    var month = formattedDate.getMonth() + 1;
    var year = formattedDate.getFullYear();
    return day + "-" + month + "-" + year
  }

  getFormattedTime(time) {
    var hours = time.getHours();
    var mins = time.getMinutes();
    var seconds = time.getSeconds();
    return hours + ":" + mins;  
  }
    

}
