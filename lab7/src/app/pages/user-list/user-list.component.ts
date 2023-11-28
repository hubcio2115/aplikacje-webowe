import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersService } from '../../services/users.service';
import { type User } from '../../services/users';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './user-list.component.html',
})
export class UserListComponent {
  protected users: User[];

  constructor(private usersService: UsersService) {
    this.users = usersService.getUsers();
  }
}
