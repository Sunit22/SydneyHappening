import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: Http) { }

  getAllEvents() {
    return this.http.get("http://localhost:3000/events/getAllEvents").pipe(map(res => res.json()));    
  }
}
