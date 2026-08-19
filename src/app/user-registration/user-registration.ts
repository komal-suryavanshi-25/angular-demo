import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-registration',
  imports: [FormsModule,RouterLink],
  templateUrl: './user-registration.html',
  styleUrl: './user-registration.scss',
})
export class UserRegistration {

  firstName="";
  lastName="";
  emailId="";
  mobileNumber="";


  showhide()
  {
    if(this.firstName=='' || this.lastName =='' || 
      this.emailId == '' || this.mobileNumber=='')
    {
      return true;
    }
    else{
      return false;
    }
    
  }

}
