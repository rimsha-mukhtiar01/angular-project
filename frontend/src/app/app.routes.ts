import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';
import { SalesLineComponent } from './pages/sales-line/sales-line';
import { CategoryBarComponent } from './pages/category-bar/category-bar';
import { Signup } from './pages/signup/signup';
import { Login } from './pages/login/login';

export const routes : Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'signup', component: Signup },
  { path: 'login', component: Login },
  { path: 'dashboard', component: Dashboard },
  { path: 'sales-line', component: SalesLineComponent },
  { path: 'category-bar', component: CategoryBarComponent },

  { path: '**', redirectTo: 'dashboard' }
];
