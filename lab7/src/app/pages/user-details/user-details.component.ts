import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersService } from '../../services/users.service';
import { type User } from '../../services/users';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-details.component.html',
})
export class UserDetailsComponent implements OnInit, OnDestroy {
  protected user: User | undefined;
  #routeSubscriptionn!: Subscription;

  constructor(
    private usersService: UsersService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.#routeSubscriptionn = this.route.params.subscribe((params) => {
      const userId = Number(params['id']);

      this.user = this.usersService.getUserById(userId);
    });
  }

  ngOnDestroy(): void {
    this.#routeSubscriptionn.unsubscribe();
  }
}
