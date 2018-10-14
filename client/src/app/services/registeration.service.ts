import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from "../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class RegisterationService {

  apiUrl : string;

  constructor(private http: Http) { 
    this.apiUrl = `${environment.domainURL}` + '/users/register';
  }

  registerUser(registerationData) {
    console.log(this.apiUrl);
    return this.http.post(this.apiUrl, registerationData);
  }


  






}
