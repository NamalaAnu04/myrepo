import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { Router } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeHeaderComponent } from './employee-header/employee-header.component';
import { ManagerHeaderComponent } from './manager-header/manager-header.component';
import { ManagerDashboardComponent } from './manager-dashboard/manager-dashboard.component';
import { ApplyLeaveComponent } from './apply-leave/apply-leave.component';
import { DateBeforeCurrentDirective } from './apply-leave/dateBeforeCurrent-directive';
import { EndDateAfterStartDateDirective } from './apply-leave/endDateAfterStartDate-directive';
import { StartDateBeforeEndDateDirective } from './apply-leave/startDateBeforeEndDate-directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SuccessDialogComponent } from './success-dialog/success-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { TrackLeavesComponent } from './track-leaves/track-leaves.component';
import { EditLeaveComponent } from './edit-leave/edit-leave.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    EmployeeHeaderComponent,
    ManagerHeaderComponent,
    ManagerDashboardComponent,
    ApplyLeaveComponent,
    DateBeforeCurrentDirective,
    EndDateAfterStartDateDirective,
    StartDateBeforeEndDateDirective,
    SuccessDialogComponent,
    TrackLeavesComponent,
    EditLeaveComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
