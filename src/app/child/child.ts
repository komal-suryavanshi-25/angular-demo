import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.scss',
})
export class Child {

  @Input() nameChild='';
  @Input() userChild : any = 
  {
    

  }
  @Output() sentToParent = new EventEmitter();
  send()
  {
    this.sentToParent.emit('ROKO');
  }
}
