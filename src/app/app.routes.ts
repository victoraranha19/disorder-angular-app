import { Routes } from '@angular/router';

import { CarteirasComponent } from './pages/carteiras/carteiras.component';
import { GastosComponent } from './pages/gastos/gastos.component';
import { LoginComponent } from './pages/login/login.component';
import { authGuard } from './services/_guard/auth.guard';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'carteiras', component: CarteirasComponent, canActivate: [authGuard] },
  { path: 'gastos', component: GastosComponent, canActivate: [authGuard] },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login', pathMatch: 'full' },
];
