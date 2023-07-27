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
  constructor(private router: Router,private formBuilder: FormBuilder) { }

  username!: string;
  password!: string;

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required]]
    });
  }

  submitForm():void {
    // if (this.username == 'admin' && this.password == 'admin') {
    //   // Form is valid, handle form submission here
    //   this.router.navigate(['/userreg']);
    //   console.log(this.myForm.valid); // Access form values using this.myForm.value
    // } else {
    //   // Form is invalid, display error messages or take appropriate action
    //   console.log("Form is invalid.");
    // }

    if(this.username && this.password){
      this.router.navigate(['/userreg']);
    } else {
      alert('enter username and password');
    }
  }

  // login() : void {
  //   if(this.username == 'admin' && this.password == 'admin'){
  //    this.router.navigate(["userreg"]);
  //   }else {
  //     alert("Invalid credentials");
  //   }
  // }
}

