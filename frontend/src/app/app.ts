import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink } from '@angular/router';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule, NzIconService } from 'ng-zorro-antd/icon';

import {
  DashboardOutline,
  LineChartOutline,
  BarChartOutline,
  LogoutOutline
} from '@ant-design/icons-angular/icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [
    CommonModule,
    RouterOutlet,
    NzLayoutModule,
    NzMenuModule,
    NzIconModule, RouterLink
  ],
  styleUrls: ['./app.scss']
})
export class App {

  constructor(
    public auth: AuthService,
    private router: Router,
    private iconService: NzIconService     // <-- ADD THIS
  ) {
    // REGISTER ICONS HERE
    this.iconService.addIcon(
      DashboardOutline,
      LineChartOutline,
      BarChartOutline,
      LogoutOutline
    );
  }

  logout() {
    this.auth.logout();
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
