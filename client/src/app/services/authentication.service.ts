import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: Http) { }

  validateLogin(validateLogin) {
    console.log(validateLogin);
    return this.http.post('/api/login', validateLogin);    
  }
}
