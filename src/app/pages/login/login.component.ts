import { Component } from '@angular/core';
import {  FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent{
  myForm!: FormGroup;
  username!: string;
  password!: string;

  constructor(private router: Router,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required]]
    });
  }

  submitForm():void {
    const isAuthenticated = this.checkCredentials();
    if (isAuthenticated) {
      // Form is valid, handle form submission here
      this.router.navigate(['userreg']);
      console.log(this.myForm.valid); // Access form values using this.myForm.value
    } else {
      // Form is invalid, display error messages or take appropriate action
      console.log("Invalid credentials. Please try again.");
    }
  }
  private checkCredentials(): boolean {
    // Replace this with your actual authentication logic (e.g., API call, etc.)
    // For demonstration purposes, I'm using a simple hardcoded check
    return this.username === 'demo' && this.password === 'password';
  }

  // login() : void {
  //   if(this.username == 'admin' && this.password == 'admin'){
  //    this.router.navigate(["userreg"]);
  //   }else {
  //     alert("Invalid credentials");
  //   }
  // }
}

