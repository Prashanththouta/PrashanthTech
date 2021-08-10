import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  existUsers: any = "";
  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
  }

  navigateToUserDetail() {
    let pathName = document.location.pathname;
    console.log(pathName);
    this.router.navigate([ pathName+"/userdetail"]);
  }

  async getServerData() {
    let data = await this.userService.getServerData();
    if (data) {
      this.existUsers = data;
    }
  }

}
