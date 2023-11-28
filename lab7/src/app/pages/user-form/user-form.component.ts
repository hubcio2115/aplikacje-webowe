import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import clsx from 'clsx';
import { UsersService } from '../../services/users.service';
import { User } from '../../services/users';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './user-form.component.html',
})
export class UserFormComponent {
  constructor(
    private usersService: UsersService,
    private router: Router,
  ) {}

  userForm = new FormGroup({
    firstName: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.pattern(/^[A-Z][a-zA-Z]{3}[a-zA-Z]*/),
      ],
    }),
    lastName: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.pattern(/^[A-Z][a-zA-Z]{3}[a-zA-Z]*/),
      ],
    }),
    age: new FormControl(1, {
      nonNullable: true,
      validators: [Validators.required, Validators.min(1), Validators.max(99)],
    }),
    postalCode: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.pattern(/^[0-9]{2}-[0-9]{3}$/),
      ],
    }),
  });

  protected readonly clsx = clsx;

  onSubmit() {
    this.usersService.addUser(this.userForm.value as User);
    this.router.navigate(['/users']);
  }
}
