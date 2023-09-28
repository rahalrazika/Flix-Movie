import { Component } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  email: string = '';
  password: string = '';
  onSubmit() {
    console.log('Form submitted');
    
  }
}
