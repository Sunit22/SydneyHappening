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
    if(loginData)
      {
        this.authenticationService.validateLogin(this.loginData).subscribe(data => {
          if(data == 'success')
            {
              //Write your code what you have to do after login
              this.router.navigate(['/dashboard']);
              this.showMessage.showSuccess("You have successfully logged in");
            }
            else {
                this.showMessage.showError("You are not register with us, Please signup and then login")
            }
        });  
      }
      else {
          this.showMessage.showError("Invalid username or password.");
      }
    
  }

}
