import { Routes } from '@angular/router';

export const routes: Routes = [
  { 
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then(p => p.LoginPage)
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./pages/dashboard/dashboard.page').then(p => p.DashboardPage)
  },
  { path: '**', redirectTo: '/login', pathMatch: 'full' },
];
