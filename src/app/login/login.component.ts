import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { RegistrationService } from '../registration.service';
import { User } from '../user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  msg!:String;
  constructor(private registrationService:RegistrationService,private router: Router){}
  loginUser(user: User) {
    this.registrationService.loginUser(user).subscribe(
      (data: any) => {localStorage.setItem('loginUser',JSON.stringify(data))
        // Check if data is available and has a role property
        if (data && data.role === 'employee') {
          this.router.navigate(['/dashboard']);
        } else if (data && data.role === 'manager') {
          this.router.navigate(['/mdashboard']);
        } else {
          
        }
      },
      (error) => (this.msg = 'Invalid Credentials')
    );
  }
  noAccount(){
    this.router.navigate(["/signup"]);
  }

}
