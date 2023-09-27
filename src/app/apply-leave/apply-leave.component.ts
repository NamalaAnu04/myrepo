import { Component } from '@angular/core';
import { RegistrationService } from '../registration.service';
import { Router } from '@angular/router';
import { Leave } from '../leave';
import { DialogService } from '../dialog.service';

@Component({
  selector: 'app-apply-leave',
  templateUrl: './apply-leave.component.html',
  styleUrls: ['./apply-leave.component.css']
})
export class ApplyLeaveComponent {
  loginObj = JSON.parse(localStorage.getItem('loginUser') || '[]');
  leaveCount: number = 0; // Initialize leaveCount
  errormsg!:String;
  constructor(
    private registrationService: RegistrationService,
    private router: Router,
    private dialogService: DialogService
  ) {}

  ngOnInit() {
    this.loadLeaveCount();
  }

  loadLeaveCount() {
    // Fetch the user's leave count from your backend service
    this.registrationService.getLeaveCount(this.loginObj.email).subscribe(
      (response) => {
        this.leaveCount = response; // Set leaveCount
      },
      (error) => {
        console.error("Error fetching leave count:", error);
      }
    );
  }

  ApplyLeave(leave: Leave) {
    leave.email = this.loginObj.email;
    this.registrationService.addLeave(leave).subscribe(
      (response) => {
        this.dialogService.openSuccessDialog(); 
        this.loadLeaveCount();
      },
      (error) => {
        console.error("Error applying leave:", error);
        if (error.status === 400 && error.error === "No available leaves") {
          this.errormsg="No Leaves Available";
        }
      }
    );
  }
}
