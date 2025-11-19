import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private loggedIn = new BehaviorSubject(false);
  isLoggedIn$ = this.loggedIn.asObservable();

  isLoggedIn() {
  return this.loggedIn.value;
}


  login() {
    this.loggedIn.next(true);
  }

  logout() {
    this.loggedIn.next(false);
  }
}
