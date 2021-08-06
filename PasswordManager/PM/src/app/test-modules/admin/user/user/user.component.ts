import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToUserDetail() {
    let pathName = document.location.pathname;
    console.log(pathName);
    this.router.navigate([ pathName+"/userdetail"]);
  }

}
