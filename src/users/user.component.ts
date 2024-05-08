import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserList } from 'src/interfaces/user.interface';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  @Input() userLists: UserList[] = [];
  @Output() removeUser = new EventEmitter<number>();
  @Output() addUserEvent = new EventEmitter<string>(); 
  newUserName: string = '';
  isUserEmpty = false;
  
  addUser = () => {
    this.addUserEvent.emit(this.newUserName);
    this.newUserName = '';
  }

  setNewUserName = (e: Event) => {
    const inputValue = e.target as HTMLTextAreaElement;
    this.newUserName = inputValue.value;
    console.log(this.newUserName);
  }
}
