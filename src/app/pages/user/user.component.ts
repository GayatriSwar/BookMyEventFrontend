import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

    id: number;
    firstName: String;
    lastName: String;
    email: String;
    password: String;
    role: String;
    gender: String;
    mobileNo: String;

  constructor() { }

  ngOnInit(): void {
  }
  //onSubmit(): void{
  //  Swal.fire('Welcome' , '', 'success' )
  //}

}
