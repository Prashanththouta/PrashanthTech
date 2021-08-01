import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Email } from '../models/EMail.interface';
import { PhoneNo } from '../models/PhoneNo.interface';
import { Site } from '../models/Site.interface';
import { PasswordlistService } from '../services/passwordlist.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.scss']
})
export class AdduserComponent implements OnInit {

  isShowAdduser: boolean = false;
  sitesList: Site[] = [];
  emailList: Email[] = [];
  phoneNoList: PhoneNo[] = [];

  site: Site | undefined = undefined;
  phoneNo: PhoneNo | undefined = undefined;
  email: Email | undefined = undefined;
  password: string = "";

  constructor(private passWordListService: PasswordlistService, private router: Router) { }

  ngOnInit() {
    this.isShowAdduser = true;
    this.sitesList = <Site[]>this.passWordListService.Sites;
    this.emailList = this.passWordListService.Emails;
    this.phoneNoList = this.passWordListService.PhoneNos;
  }

  adduserData() {
    this.passWordListService.addUsePasswordData(<Email>this.email, <PhoneNo>this.phoneNo, <Site>this.site, this.password);
    this.router.navigate(['dashboard']);
  }

  @HostListener('keydown', ['$event'])
  onClose(e: any) {
    console.log(e);
  }

  onHide() {
    this.isShowAdduser = false;
  }


}
