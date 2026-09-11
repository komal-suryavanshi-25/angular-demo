import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Users } from '../services/users';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-login-form',
  imports: [ReactiveFormsModule,UpperCasePipe],
  templateUrl: './login-form.html',
  styleUrl: './login-form.scss',
})

export class LoginForm implements OnInit{
  users: any=[]

  loginForm = new FormGroup({
    email: new FormControl('',[Validators.required]),
    password : new FormControl('',[Validators.required,Validators.minLength(6)]),
    education : new FormArray([])
  })
  constructor(private userServices:Users){

  }
  ngOnInit(): void {
    
     this.users = this.userServices.getUsers();
  }
     submit()
     {
      console.log(this.loginForm.value)
     }
     get education(): FormArray {
  return this.loginForm.get('education') as FormArray;

  
}
}
