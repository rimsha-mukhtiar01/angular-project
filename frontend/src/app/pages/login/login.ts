import { Component, NgZone } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMessageService } from 'ng-zorro-antd/message';
import { AuthService } from '../../auth';  // ✅ import your AuthService

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule
  ],
  templateUrl: './login.html',
  styleUrls: ['./login.scss']
})
export class Login {
  form = { email: '', password: '' };
  error = '';

  constructor(
    private router: Router,
    private http: HttpClient,
    private ngZone: NgZone,
    private message: NzMessageService,
    private auth: AuthService   // ✅ inject AuthService
  ) {}

  login() {
    this.http.post<any>('http://localhost:5000/login', this.form)
      .subscribe({
        next: res => {
          if (res.token) {
            localStorage.setItem('token', res.token);
            this.message.success(res.message || 'Login successful! Redirecting...');
            this.onLoginSuccess();   // ✅ call the new method
          } else {
            this.error = res.error || 'Invalid credentials';
          }
        },
        error: err => this.error = err.error?.message || 'Login failed'
      });
  }

  // ⭐ New method to update AuthService and navigate
  onLoginSuccess() {
    this.auth.login();          // sets the user as logged in (shows sidebar)
    this.ngZone.run(() => this.router.navigate(['/dashboard']));
  }
}
