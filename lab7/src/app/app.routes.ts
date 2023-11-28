import { Routes } from '@angular/router';
import { UserListComponent } from './pages/user-list/user-list.component';
import { UserDetailsComponent } from './pages/user-details/user-details.component';
import { UserFormComponent } from './pages/user-form/user-form.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'users',
  },
  {
    path: 'users',
    component: UserListComponent,
  },
  {
    path: 'users/form',
    component: UserFormComponent,
  },
  {
    path: 'users/:id',
    component: UserDetailsComponent,
  },
];
