import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  
  registerForm = new FormGroup({
    fullname: new FormControl("", [Validators.required, Validators.pattern("[a-zA-Z].*")]),
    email: new FormControl("", [Validators.required, Validators.email ]),
    mobile: new FormControl("", [Validators.required]),
  });

  get FullName(): FormControl{
    return this.registerForm.get("fullname") as FormControl;
  }

  get Email(): FormControl{
    return this.registerForm.get("email") as FormControl;
  }
  get Mobile(): FormControl{
    return this.registerForm.get("mobile") as FormControl;
  }


}
