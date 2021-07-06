import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../user';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';
import { Event } from 'src/app/event';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  token : string;
  authValue : string;
  private baseUrl = "http://localhost:8080"

  constructor(private http: HttpClient, public loginService: LoginService) { }


  public getEvents(): Observable<Event[]> {
    this.token = this.loginService.getToken()
    this.authValue = 'Bearer ' + this.token
    const headers = new HttpHeaders()
      .set('content-type','application/json')
      .set('Authorization', 'authValue'); 
    // const headers = { 'content-type': 'application/json'}  
    console.log(headers)
    return this.http.get<Event[]>(`${this.baseUrl}/event/show`, {'headers':headers})
  }

}
