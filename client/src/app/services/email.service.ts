import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  apiUrl : string;

  constructor(private http: HttpClient) {
    this.apiUrl = `${environment.domainURL}` + '/emails';
   }

   sendEmail(message) {
     console.log("sending email");
    //const headers = new HttpHeaders().append("token", localStorage.getItem('token'));
    return this.http.post(this.apiUrl + '/sendEmail', message);
  }
}
