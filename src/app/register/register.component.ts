import { Component } from '@angular/core';
import { RegistrationService } from '../registration.service';
import { Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  msg:String | undefined;
  constructor(private registrationService:RegistrationService,private router: Router){}
  registerUser(user: User) {
    this.registrationService.registerUser(user).subscribe(
      data => {
        localStorage.setItem('loginUser',JSON.stringify(data))
        if(user.role === "employee"){
          this.router.navigate(["/dashboard"]);
        }else{
          this.router.navigate(["/mdashboard"]);
        }
        
      },
      error => {
        this.msg = "User with " + user.email + " already exists.";
      }
    );
  }

  haveAccount(){
    this.router.navigate(["/login"]);
  }
}
