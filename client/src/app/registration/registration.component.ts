import { Component } from '@angular/core';
import { RegisterationData } from '../models/registerationData';
import { NgForm } from '@angular/forms';
import { RegisterationService } from '../services/registeration.service';
//import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  registerationData: RegisterationData = {
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    password: 'password',
    confirmPassword: 'confirmPassword'
  };

  constructor(private registerationService: RegisterationService) { }
  //constructor(private authenticationService: AuthenticationService) { }

  validateAndRegister(registerationData: NgForm) {
    this.registerationData.firstName = registerationData.value.firstName;
    this.registerationData.lastName = registerationData.value.lastName;
    this.registerationData.email = registerationData.value.email;
    this.registerationData.password = registerationData.value.password;
    this.registerationData.confirmPassword = registerationData.value.confirmPassword;

    if(registerationData.value.password != registerationData.value.confirmPassword) {
      alert("password dont match");
    } 
    else {
      this.registerationService.registerUser(this.registerationData).subscribe(data =>{
        if(data)
          console.log(data);
      });
    }

  }
  
}
