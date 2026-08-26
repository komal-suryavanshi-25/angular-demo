import { Component } from '@angular/core';
import { UserDetails } from '../user-details/user-details';
import { email } from '@angular/forms/signals';

@Component({
  selector: 'app-user-list',
  imports: [UserDetails],
  templateUrl: './user-list.html',
  styleUrl: './user-list.scss',
})
export class UserList {

userlist = [
  {
    name :"komal",
    email:"komal@gmail.com",
    number:"9082760630"
  },
  {
    name :"Rohan",
    email:"Rohan@gmail.com",
    number:"6476378464"
  },
  {
    name :"Satu",
    email:"Satu@gmail.com",
    number:"6476378464"
  }
];

get(event:any)
{
  console.log(event);

}

}
