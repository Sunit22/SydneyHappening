import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';
import { ActivatedRoute,Router } from '@angular/router';
import { ToastrService } from '../services/toastr.service';

@Component({
  selector: 'app-event-edit',
  templateUrl: './event-edit.component.html',
  styleUrls: ['./event-edit.component.css']
})
export class EventEditComponent implements OnInit {

  eventID: string;
  event:Event;

  constructor(private eventService : EventService, private router : ActivatedRoute, private showMessage:ToastrService,private route:Router) { }

  isBusy:boolean= false;

  ngOnInit() {
    this.getEvent(this.router.queryParams.subscribe(params => {this.eventID = params['eventID']}));
  }

  getEvent(eventID){
    this.eventService.getEvent(this.eventID).subscribe(event=> {      
      this.event = event;
    })
  }

  updateEvent(eventID, eventData){
    this.isBusy = true;
    var eventInfo = {
      _id: eventID,
      EventName: eventData.value.eventName,
      EventVenue: eventData.value.eventVenue,
      EventDate: this.getFormattedDate(eventData.value.eventDate),
      EventTime: this.getFormattedTime(eventData.value.eventTime),
      AvailableSeats: eventData.value.availableSeats,
      CreatedBy: localStorage.getItem('email')
    };
    this.eventService.updateEvent(eventID,eventInfo).subscribe(event=>{
      if(event == 'success'){
        this.showMessage.showSuccess("Event updated successfully")
        this.route.navigate(["/dashboard"]);
      }
      this.isBusy = false;
    });
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
