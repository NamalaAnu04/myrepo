import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable } from 'rxjs';
import { Leave } from './leave';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http:HttpClient) { }

  public loginUser(user:User){
    return this.http.post("http://localhost:8080/login",user);
  }
  public registerUser(user:User){
    return this.http.post("http://localhost:8080/register",user);
  }
  public addLeave(leave:Leave){
    return this.http.post("http://localhost:8080/applyleave",leave)
  }
  public getLeaveCount(email: string): Observable<number> {
    return this.http.get<number>(`http://localhost:8080/getLeaveCount?email=${email}`);
  }
  public getLeavesByEmail(email: string): Observable<Leave[]> {
    return this.http.get<Leave[]>(`http://localhost:8080/getLeavesByEmail?email=${email}`);
  }

  public editLeave(leave:Leave,leave_id:number){
    return this.http.put("http://localhost:8080/update/"+leave_id,leave);
  }

  public getLeaveById(leave_id:number):Observable<Leave>{
    return this.http.get<Leave>("http://localhost:8080/getleave/"+leave_id);
  }

  public deleteLeave(leave_id:number){
    return this.http.delete("http://localhost:8080/delete/"+leave_id);
  }
}
