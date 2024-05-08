import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserList } from 'src/interfaces/user.interface';
import { UsersService } from 'src/services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-first-project';
  userList: UserList[] = [];
  constructor(private userService: UsersService) {}
  ngOnInit(): void {
    this.userService.getUsers().subscribe((users: UserList[]) => {
      this.userList = users;
    });
  }

  addUser = (name: string) => {
    const newUser: UserList = {
      id: this.userList.length + 1,
      name: name,
      age: 23,
    };
    return this.userService.addUser(newUser).subscribe((user) => {
      this.userList.push(user);
    });
  };

  removeUser = (id: number): void => {
    this.userService.deleteUser(id).subscribe(() => {
      console.log('done');
      const users = this.userList.filter((user) => user.id !== id);
      this.userList = users;
    });
  };
}
