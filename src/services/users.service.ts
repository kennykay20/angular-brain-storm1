import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserList } from 'src/interfaces/user.interface';

@Injectable()
export class UsersService {
  constructor(private http: HttpClient) {}
  url = 'http://localhost:3000/userLists/';
  getUsers = (): Observable<UserList[]> => {
    return this.http.get<UserList[]>(this.url);
  };

  getUser = (id: number): Observable<UserList> => {
    const url = this.url + id;
    return this.http.get<UserList>(url);
  }
  addUser = (userList: UserList): Observable<UserList> => {
    return this.http.post<UserList>(this.url, userList);
  }

  deleteUser = (id: number): Observable<{}> => {
    const url = this.url + id;
    console.log('url delete ', url);
    return this.http.delete(`http://localhost:3000/userLists/${id}`);
  }
}
