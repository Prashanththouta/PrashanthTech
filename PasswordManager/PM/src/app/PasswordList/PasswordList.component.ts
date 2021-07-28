import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-PasswordList',
  templateUrl: './PasswordList.component.html',
  styleUrls: ['./PasswordList.component.scss']
})
export class PasswordListComponent implements OnInit {

  ds: IPasswordData[] = [];
  constructor() { }

  ngOnInit() {
    this.ds = [
      { site: Site.Facebook, email: Email.gmail1, phoneNo: PhoneNo.primary,password: "123" },
      { site: Site.Gmail, email: Email.gmail1, phoneNo: PhoneNo.primary,password: "1123" },
      {site: Site.GitHub, email:Email.gmail1, phoneNo: PhoneNo.primary,password: "1232" }
    ]
  }

}


interface IPasswordData {
  site: Site;
  email: string;
  phoneNo: PhoneNo;
  password: string;
}

enum Site{
  Facebook = "fb",
  Gmail = "Gmail",
  GitHub = "GitHub",
}

enum Email {
  gmail1 = "Pra***a@Gmail.com",
  gmail2 = "Pra***aa@Gmail.com",
  outlook11 = "Pra***a@outlook.com",
  gmaioutlook2 = "Pra***aa@outlook.com",
}

enum PhoneNo {
  primary = "970",
  secondary = "801"
}
