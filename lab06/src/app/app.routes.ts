import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { Solution1Component } from './pages/solution-1/solution-1.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'solution',
    component: Solution1Component,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];
