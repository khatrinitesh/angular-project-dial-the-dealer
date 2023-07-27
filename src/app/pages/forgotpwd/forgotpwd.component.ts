import { Component } from '@angular/core';
import {  FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgotpwd',
  templateUrl: './forgotpwd.component.html',
  styleUrls: ['./forgotpwd.component.scss']
})
export class ForgotpwdComponent {
  myForm!: FormGroup;
  email!: string;
  

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      email: ['', Validators.required],
    });
  }

  constructor(private router: Router,private formBuilder: FormBuilder){}

  

}
