import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { RegisterEmployeeService } from 'src/app/services/register-employee.service';
import { Router } from '@angular/router';
import { User } from 'src/app/user';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user = new User();
  constructor(public registerService: RegisterEmployeeService, private router : Router) { }

  ngOnInit() {
  }
  addUser() {
    this.registerService.registerUser(this.user)
      .subscribe(data => {
        console.log(data)
      })      
  }



}
