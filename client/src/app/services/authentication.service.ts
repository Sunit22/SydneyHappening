import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
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
    return this.http.post(this.apiUrl +'/login', validateLogin).pipe(
      map(this.extractData),
      catchError(this.handleError));    
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // Client Side or Network error
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  };


  private extractData(res: Response) {
    let body = res.json();
    return body || { };
  }
}
