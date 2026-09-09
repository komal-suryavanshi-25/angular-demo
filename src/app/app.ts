import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Parent } from './parent/parent';
import { UserList } from './user-list/user-list';
import { ReactiveForms } from './reactive-forms/reactive-forms';
import { LoginForm } from './login-form/login-form';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Parent,UserList,ReactiveForms,LoginForm],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('angular-demo');
}
