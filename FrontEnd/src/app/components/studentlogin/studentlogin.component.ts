import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-studentlogin',
  templateUrl: './studentlogin.component.html',
  styleUrls: ['./studentlogin.component.css']
})
export class StudentloginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }

  
  LoginForm = new FormGroup({
    username: new FormControl("", [Validators.required, Validators.pattern("[a-zA-Z].*")]),
    email: new FormControl("", [Validators.required, Validators.email ]),
    password: new FormControl("", [Validators.required, Validators.minLength(6), Validators.maxLength(8)]),
  });

  get UserName(): FormControl{
    return this.LoginForm.get("username") as FormControl;
  }

  get email(): FormControl{
    return this.LoginForm.get("email") as FormControl;
  }
  get password(): FormControl{
    return this.LoginForm.get("password") as FormControl;
  }



}
