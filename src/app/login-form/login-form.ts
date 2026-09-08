import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  imports: [ReactiveFormsModule],
  templateUrl: './login-form.html',
  styleUrl: './login-form.scss',
})

export class LoginForm implements OnInit{
  

  loginForm = new FormGroup({
    email: new FormControl('',[Validators.required]),
    password : new FormControl('',[Validators.required,Validators.minLength(6)]),
    education : new FormArray([])
  })
  constructor(){

  }
  ngOnInit(): void {
    
  }
     submit()
     {
      console.log(this.loginForm.value)
     }
     get education(): FormArray {
  return this.loginForm.get('education') as FormArray;

  
}
}
