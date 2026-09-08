import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { validate } from '@angular/forms/signals';

@Component({
  selector: 'app-reactive-forms',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-forms.html',
  styleUrl: './reactive-forms.scss',
})
export class ReactiveForms {
  
  name = new FormControl()

  userForm = new FormGroup({
    firstName : new FormControl('',[Validators.required]),
    lastName : new FormControl('',[Validators.required]),
    age : new FormControl('',[Validators.min(24)])


  })
  display()
  {
    console.log(this.userForm.value)
  }
  

}
