import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';
import { LoginData } from '../models/loginData';
import { AuthenticationService } from '../services/authentication.service';
import { ToastrService } from '../services/toastr.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
     
  loginForm: FormGroup;
  isBusy: boolean = false;
  constructor(private authenticationService: AuthenticationService, private showMessage: ToastrService, private router: Router) { 
    this.loginForm = new FormGroup({
      email: new FormControl(null, Validators.email),
      password: new FormControl(null, Validators.required)      
    });
  }

  ngOnInit() {
    this.checkIfLoggedIn();
  }

  checkIfLoggedIn() {
    
    this.authenticationService.checkIfLoggedIn().subscribe ( response => {
      this.router.navigate(['/dashboard']);
    }, 
    err => {  
     if(err.status == 400) {
      //The token though present in local storage has expired or not present. 
      //clear localStorage here. 
      localStorage.clear();
     }
    });
  }

  isValid(controlName) {
    return this.loginForm.get(controlName).invalid && this.loginForm.get(controlName).touched;
  }

  validateLogin() {
    this.isBusy = true;
    if(this.loginForm.valid) {
      this.authenticationService.validateLogin(this.loginForm.value).subscribe(response => {
        localStorage.setItem('token', response.token);
        localStorage.setItem('userID', response.userID);
        localStorage.setItem('firstName', response.firstName);
        localStorage.setItem('email', response.email);
        localStorage.setItem('IsAdmin', response.IsAdmin.toString());
        this.showMessage.showSuccess("You have successfully logged in");
        this.isBusy = false;
        this.router.navigate(['/dashboard']);  
      }, err => {
        this.showMessage.showError(err.error);
      }); 
    }
 
  }

}
