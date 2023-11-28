import { Injectable } from '@angular/core';
import { User, userList } from './users';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  #users = userList;

  public getUsers() {
    return this.#users;
  }

  public getUserById(id: User['id']) {
    return this.#users.find((value) => value.id === id);
  }

  public addUser(newUser: Omit<User, 'id'>) {
    this.#users.push({ id: this.#users.length + 1, ...newUser });
  }
}
