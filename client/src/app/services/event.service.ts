import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: Http) { }

  getAllEvents() {
    return this.http.get('/api/events').pipe(map(res => res.json()));    
  }
}
