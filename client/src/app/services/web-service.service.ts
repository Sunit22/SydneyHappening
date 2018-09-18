import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class WebServiceService {

  constructor(private http: Http) { }

  getAllEvents() {
    return this.http.get('/api/events').pipe(map(res => res.json().events));    
  }
  
}
