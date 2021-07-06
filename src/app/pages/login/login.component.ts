import { Component, OnInit, OnDestroy } from '@angular/core';

import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  credentials = {
    userName: '',
    password: ''
  }

  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit(): void {
  }
  ngOnDestroy() {
  }

  onSubmit(){
    console.log("Submit");
    if((this.credentials.userName != '' && this.credentials.password != '')
     && (this.credentials.password != null && this.credentials.userName != null)){

      this.loginService.doLogin(this.credentials).subscribe(
        (response: any) => {
          console.log(response.token);
          this.loginService.login(response.token);
          this.router.navigateByUrl("/user")
          // window.location.href="/user-profile";
        },
        (error: HttpErrorResponse)=>{
          console.log(error);
          Swal.fire('Invalid Credentials', " ",'warning')
        }
      );
       
     }
     else{
      Swal.fire('Invalid Credentials', " ",'warning')
    }
  }

}
