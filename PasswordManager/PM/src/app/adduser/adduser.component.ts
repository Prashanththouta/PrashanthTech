import { Component, HostListener, OnInit } from '@angular/core';
import { Site } from '../models/Site.interface';
import { PasswordlistService } from '../services/passwordlist.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.scss']
})
export class AdduserComponent implements OnInit {

  isShowAdduser: boolean = false;
  sitesList: any[] = [];
  constructor(private passWordListService: PasswordlistService) { }

  ngOnInit() {
    this.isShowAdduser = true;
    this.sitesList = <any[]>this.passWordListService.Sites;
  }

  @HostListener('keydown', ['$event'])
  onClose(e: any) {
    console.log(e);
  }

  onHide() {
    this.isShowAdduser = false;
  }


}
