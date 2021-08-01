import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthorizationService } from '../Authorization/authorization.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLoggedIn: boolean = false;
  loginSubscription: Subscription = new Subscription();
  constructor(private authorizationService: AuthorizationService) { }

  ngOnInit() {
     this.loginSubscription = this.authorizationService.isLoggedIn$.subscribe(l => {
      this.isLoggedIn = l;
    })
  }

}
