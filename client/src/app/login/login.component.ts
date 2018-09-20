import { Component, OnInit } from '@angular/core';
import { LoginData } from '../models/loginData';
import { AuthenticationService } from '../services/authentication.service'
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginData: LoginData = {
    username: 'username',
    password: 'password'
  };  
  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }

  validateLogin(loginData: NgForm) {
    this.loginData.username = loginData.value.username;
    this.loginData.password = loginData.value.password;
    this.authenticationService.validateLogin(this.loginData);
    
  }

}
