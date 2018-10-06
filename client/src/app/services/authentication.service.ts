import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from "rxjs/operators";
import { environment } from "../../environments/environment";



@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  apiUrl : string;

  constructor(private http: Http) {
    this.apiUrl = `${environment.domainURL}` + '/users';
   }

  validateLogin(validateLogin) {
    console.log(validateLogin);
    console.log(this.apiUrl +'/login');
    return this.http.post(this.apiUrl +'/login', validateLogin);    
  }
}
