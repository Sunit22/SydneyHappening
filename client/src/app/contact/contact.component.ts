import { Component, OnInit } from '@angular/core';
import {EmailService } from '../services/email.service';
import { AbstractControl, FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from '../services/toastr.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  sendMessage: FormGroup;

  constructor(private emailService: EmailService,  private showMessage: ToastrService) { 
      this.sendMessage = new FormGroup({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.email),
      phone: new FormControl(null,Validators.required),
      message: new FormControl(null, Validators.required)
    });
  }

  ngOnInit() {
  }
  
  isValid(controlName) {
    return this.sendMessage.get(controlName).invalid && this.sendMessage.get(controlName).touched;
  }

  sendEmail(){
    if(this.sendMessage.valid) {
      this.emailService.sendEmail(this.sendMessage.value).subscribe( response => {
        this.showMessage.showSuccess("Your message has been sent to the admins.");
      },
      err => {
        this.showMessage.showError("An error occured, please send messag again");
      })
    }
  
  }
}
