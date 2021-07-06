import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../user';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RegisterEmployeeService {
  private baseUrl= "http://localhost:8080";
  constructor(private http: HttpClient) { }

  registerUser(user:User): Observable<any> {
    const headers = { 'content-type': 'application/json'}
    const body=JSON.stringify(user);
    console.log(body)
    return this.http.post(`${this.baseUrl}/registration/register` + '', body,{'headers':headers})
  }
  

}
