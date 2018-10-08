import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Event } from "../models/Event";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})

export class EventService {

  apiUrl : string;

  constructor(private http: HttpClient) {
    this.apiUrl = `${environment.domainURL}` + '/events';
  }

  getEvents(): Observable<any> {
    const headers = new HttpHeaders().append("token", localStorage.getItem('token'));
    return this.http.get(this.apiUrl, {headers});
  } 
  
  getEvent(eventID: string): Observable<any> {
    const headers = new HttpHeaders().append("token", localStorage.getItem('token'));
    return this.http.get(`${this.apiUrl}/${eventID}`, {headers});
  }
  addEvent(data): Observable<any> {
    const headers = new HttpHeaders().append("token", localStorage.getItem('token'));
    return this.http.post(this.apiUrl, data, {headers});
  }

  updateEvent(eventID, event):Observable<any>
  {
    const headers = new HttpHeaders().append("token", localStorage.getItem('token'));
    return this.http.patch(`${this.apiUrl}/${eventID}`,event, {headers});
  }

  deleteEvent(eventID: string): Observable<any> {
    const headers = new HttpHeaders().append("token", localStorage.getItem('token'));
    return this.http.delete(`${this.apiUrl}/${eventID}`, {headers});
  }

  registerToAttend(userEventRegister) {
    const headers = new HttpHeaders().append("token", localStorage.getItem('token'));
    return this.http.post(this.apiUrl + '/registerToAttend', userEventRegister, {headers});
  }

  getUserEvents(userData) {
    const headers = new HttpHeaders().append("token", localStorage.getItem('token'));
    return this.http.post(this.apiUrl + '/getUserEvents', userData, {headers});
  }
}
