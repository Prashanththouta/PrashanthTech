import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  userDetails: any[] = [];
  isLoggedIn$ = new Subject<boolean>();
  constructor(private router: Router) { }

  signUp(email: string, phoneNo: number, password: string) {
    this.userDetails.push({ Email: email, PhoneNo: phoneNo, Password: password });
    this.router.navigate(['/dashboard']);
    this.isLoggedIn$.next(true);
  }

  login(email: string, password: string) {
    
  }

}
