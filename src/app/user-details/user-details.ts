import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user-details',
  imports: [],
  templateUrl: './user-details.html',
  styleUrl: './user-details.scss',
})
export class UserDetails {

  @Input() userListChild : any= {

  }

  @Output() userdetails = new EventEmitter();
  send1()
  {
    this.userdetails.emit('Koma');
  }
}
