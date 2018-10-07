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
  constructor(private authenticationService: AuthenticationService, private showMessage: ToastrService, private router: Router) { 
    this.loginForm = new FormGroup({
      email: new FormControl(null, Validators.required),
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
    console.log(this.loginForm.value);
    if(this.loginForm.valid) {
      this.authenticationService.validateLogin(this.loginForm.value).subscribe(response => {
    
        console.log(response.userID);
        console.log(response.token);
        console.log(response.firstName);
        
        localStorage.setItem('token', response.token);
        localStorage.setItem('userID', response.userID);
        localStorage.setItem('firstName', response.firstName);
        localStorage.setItem('email', response.email);
        this.showMessage.showSuccess("You have successfully logged in");
        this.router.navigate(['/dashboard']);


  
      }, err => {
        console.log(err.error);
        this.showMessage.showError(err.error);
      }); 
    }
 
  }

}
