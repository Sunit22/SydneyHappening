import { Injectable } from '@angular/core';
import { map } from "rxjs/operators";
import { ToastaService, ToastaConfig, ToastaComponent, ToastOptions, ToastData } from 'ngx-toasta';

@Injectable({
  providedIn: 'root'
})
export class ToastrService {

  constructor(public toastr: ToastaService) { }


  showSuccess(message) {
    let toastOptions: ToastOptions = {
      title : 'Success!',
      msg: message,
      showClose: true,
      timeout: 5000,
      theme:'bootstrap'
    }
    return this.toastr.success(toastOptions);
  }
  
  showError(message) {
    let toastOptions: ToastOptions = {
      title : 'Oops!',
      msg: message,
      showClose: true,
      timeout: 5000,
      theme:'bootstrap'
    }
    return this.toastr.error(toastOptions);
  }
  
  showWarning(message) {
    let toastOptions: ToastOptions = {
      title : 'Alert!',
      msg: message,
      showClose: true,
      timeout: 5000,
      theme:'bootstrap'
    }
    return this.toastr.warning(toastOptions);
  }
  
  showInfo(message) {
    let toastOptions: ToastOptions = {
      title : 'Info!',
      msg: message,
      showClose: true,
      timeout: 5000,
      theme:'bootstrap'
    }
    return this.toastr.info(message);
  }

}

