import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HeaderLayoutComponent } from './components/header-layout/header-layout.component';
import { SidebarLayoutComponent } from './components/sidebar-layout/sidebar-layout.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DetailScreenComponent } from './components/detail-screen/detail-screen.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'detail_screen',
    component: DetailScreenComponent,
  },
];
