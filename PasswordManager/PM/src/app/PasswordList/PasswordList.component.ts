import { Component, OnInit } from '@angular/core';
import { IPasswordData } from '../models/IPasswordData';
import { PhoneNo } from '../models/PhoneNo.interface';
import { Site } from '../models/Site.interface';
import { PasswordlistService } from '../services/passwordlist.service';

@Component({
  selector: 'app-PasswordList',
  templateUrl: './PasswordList.component.html',
  styleUrls: ['./PasswordList.component.scss']
})
export class PasswordListComponent implements OnInit {

  ds: IPasswordData[] = [];
  constructor(private passwordListService: PasswordlistService) { }

  ngOnInit() {
    
  }

}