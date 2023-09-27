import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manager-header',
  templateUrl: './manager-header.component.html',
  styleUrls: ['./manager-header.component.css']
})
export class ManagerHeaderComponent {
  showButtons: boolean = false;
  showLogout:boolean=false;
  constructor(private router:Router){}
  toggleButtons() {
    this.showButtons = !this.showButtons;
  }

  isButtonWhiteText: boolean = false;
  toggleButtonTextColor() {
    this.isButtonWhiteText = !this.isButtonWhiteText;
  }

  isNewLeaveBlack: boolean = false;
  isLeaveOverviewBlack: boolean = false;

  toggleApplyLeaveColor() {
    this.isNewLeaveBlack = !this.isNewLeaveBlack;
    this.isLeaveOverviewBlack = false; 
  }

  toggleTrackLeaveColor() {
    this.isLeaveOverviewBlack = !this.isLeaveOverviewBlack;
    this.isNewLeaveBlack = false;
  }

  showLogOut(){
    this.showLogout=!this.showLogout;
  }

  loginObj=JSON.parse(localStorage.getItem('loginUser')||'[]');

  logout(){
    localStorage.removeItem('loginUser');
    this.router.navigate(["/login"]);
  }
}
