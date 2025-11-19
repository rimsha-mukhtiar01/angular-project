import { Component, NgZone } from '@angular/core'; 
import { Router, RouterModule } from '@angular/router'; 
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms'; 
import { HttpClientModule, HttpClient } from '@angular/common/http'; 
import { NzFormModule } from 'ng-zorro-antd/form'; 
import { NzInputModule } from 'ng-zorro-antd/input'; 
import { NzButtonModule } from 'ng-zorro-antd/button'; 
import { NzMessageService } from 'ng-zorro-antd/message'; 

@Component({ selector: 'app-signup', 
  standalone: true, 
  imports: [ CommonModule, FormsModule, RouterModule, HttpClientModule, NzFormModule, NzInputModule, NzButtonModule ], 
  templateUrl: './signup.html', 
  styleUrls: ['./signup.scss'] 
}) 
export class Signup { form = 
  { name: '', email: '', password: '' }; 
  error = ''; 
  constructor( private router: Router, 
    private http: HttpClient, 
    private ngZone: NgZone, 
    private message: NzMessageService ) {} 
    
    signup() {
  // --- Frontend validation ---
  if (!this.form.name.trim() || !this.form.email.trim() || !this.form.password.trim()) {
    this.message.error("⚠️ Please fill all fields before signing up!");
    return;
  }

  // Optional: Check password length
  if (this.form.password.length < 6) {
    this.message.error("⚠️ Password must be at least 6 characters!");
    return;
  }

  // --- Call API only if valid ---
  this.http.post<any>('http://localhost:5000/signup', this.form)
    .subscribe({
      next: res => {
        this.message.success(res.message || 'Signup successful! Please login.');
        this.ngZone.run(() => this.router.navigate(['/login']));
      },
      error: err => {
        this.message.error(err.error?.message || 'Signup failed');
      }
    });
}
}