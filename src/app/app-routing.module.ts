import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManagerDashboardComponent } from './manager-dashboard/manager-dashboard.component';
import { ApplyLeaveComponent } from './apply-leave/apply-leave.component';
import { TrackLeavesComponent } from './track-leaves/track-leaves.component';
import { EditLeaveComponent } from './edit-leave/edit-leave.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {path:'signup',component:RegisterComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'mdashboard',component:ManagerDashboardComponent},
  {path:'apply-leave',component:ApplyLeaveComponent},
  {path:'track-leave',component:TrackLeavesComponent},
  {path:'editleave/:id',component:EditLeaveComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
