import { Component } from '@angular/core';
import { RegisterationData } from '../models/registerationData';
import { AbstractControl, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';
import { RegisterationService } from '../services/registeration.service';
import { ToastrService } from '../services/toastr.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  registerationForm: FormGroup;

  constructor(private registerationService: RegisterationService, private showMessage: ToastrService, private router: Router) {
    this.registerationForm = new FormGroup({
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.email),
      password: new FormControl(null, Validators.required),
      confirmPassword: new FormControl(null, this.passwordValidator),
      IsAdmin: new FormControl(false)
    });
   
    //subscribe to value changes of the password field so that confirm password check happens again. 
    this.registerationForm.controls.password.valueChanges
    .subscribe(
      x => this.registerationForm.controls.confirmPassword.updateValueAndValidity()
    );

   }

   isValid(controlName) {
    return this.registerationForm.get(controlName).invalid && this.registerationForm.get(controlName).touched;
  }
  validateAndRegister() {
    console.log(this.registerationForm.value);
    if(this.registerationForm.valid) {
      this.registerationService.registerUser(this.registerationForm.value).subscribe(data =>{
        if(data == 'EC1') {
          this.showMessage.showError("This email is already registered.");
        }
        else {
          this.showMessage.showSuccess("User registered, please login")
          this.router.navigate(['']);
        }
      },
      error => {
        this.showMessage.showError("Error registering user, please try again");
      });
    }

  }

  passwordValidator(control: AbstractControl) {
    if (control && (control.value !== null || control.value !== undefined)) {
      const confirmPassword = control.value;
      const passControl = control.root.get('password');
      if (passControl) {
        const passValue = passControl.value;
        if (passValue !== confirmPassword || passValue === '') {
          return {
            isError: true
          };
        }
      }
    }

    return null;
  }
  
}
