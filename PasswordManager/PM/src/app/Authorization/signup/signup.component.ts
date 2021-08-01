import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../authorization.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  email: string | any = "";
  phoneNo: number | undefined | any = undefined;
  password: string | any = "";

  constructor(private authorizationService: AuthorizationService) { }

  ngOnInit() {

  }

  signUp() {
    this.authorizationService.signUp(this.email, this.phoneNo, this.password);
  }

}
