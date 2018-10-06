import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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

  loginData: LoginData = {
    email: 'email',
    password: 'password'
  };  
  
  constructor(private authenticationService: AuthenticationService, private showMessage: ToastrService, private router: Router) { }

  ngOnInit() {
  }

  validateLogin(loginData: NgForm) {
    this.loginData.email = loginData.value.email;
    this.loginData.password = loginData.value.password;
    this.authenticationService.validateLogin(this.loginData).subscribe(response => {
      if(response.loginStatus) {
        alert("here");
        this.router.navigate(['/dashboard']);
        localStorage.setItem('token',response.token);
        localStorage.setItem('userID',response.userID);
        localStorage.setItem('firstName',response.firstName);
        localStorage.setItem('email',response.email);
        localStorage.setItem('IsAdmin',response.IsAdmin.toString());
      }}, err => {
        alert(err);
    });  
  }

}
