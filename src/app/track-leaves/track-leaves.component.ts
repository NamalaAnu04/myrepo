import { Component } from '@angular/core';
import { Leave } from '../leave';
import { RegistrationService } from '../registration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-track-leaves',
  templateUrl: './track-leaves.component.html',
  styleUrls: ['./track-leaves.component.css']
})
export class TrackLeavesComponent {
  leaves: Leave[] = []

  constructor(private registrationService: RegistrationService,private router:Router) {}

  ngOnInit() {
    const loginObj = JSON.parse(localStorage.getItem('loginUser') || '{}');
    const userEmail = loginObj.email;

    this.registrationService.getLeavesByEmail(userEmail).subscribe(
      (data) => {
        this.leaves = data;
      },
      (error) => {
        console.error('Error fetching leaves:', error);
      }
    );
  }

  deleteLeave(leave_id: number) {
    this.registrationService.deleteLeave(leave_id).subscribe(
      () => {
        console.log('Leave deleted successfully:');
        this.leaves = this.leaves.filter((leave) => leave.leave_id !== leave_id);
      },
      (error) => {
        console.error('Error deleting leave:', error);
      }
    );
  }
  trackByLeaveId(index: number, leave: Leave): number {
    return leave.leave_id;
  }

  editLeave(id: number) {
    this.router.navigate(['/editleave', id]);
  }
}
