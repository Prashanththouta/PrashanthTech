import { Injectable } from '@angular/core';
import { Email } from '../models/EMail.interface';
import { IPasswordData } from '../models/IPasswordData';
import { PhoneNo, PhoneNoTye } from '../models/PhoneNo.interface';
import { Site } from '../models/Site.interface';

@Injectable({
  providedIn: 'root'
})
export class PasswordlistService {
  private sites: Site[] = [];
  private phoneNos: PhoneNo[] = [];
  private emails: Email[] = [];
  private userPasswordDetails: IPasswordData[] | any[] = [];

  constructor() {
    this.addDefaultData();
  }

  addUsePasswordData(email: Email | any, phoneNo: PhoneNo | any, site: Site | any, password: string) {
    this.userPasswordDetails.push({ email: email, phoneNo: phoneNo, site: site, password: password });
    console.log(this.userPasswordDetails);
  }

  addSite(name: string) {
    this.sites.push({ site: name });
  }

  addPhoneNo(phoneNo: number, type: PhoneNoTye) {
    this.phoneNos.push({ PhoneNo: phoneNo, Type: type });
  }

  addEmail(email: string) {
    this.emails.push({ email: email });
  }

  
  public get Sites() : Site[] {
    return this.sites;
  }

  public get PhoneNos(): PhoneNo[] {
    return this.phoneNos;
  }

  public get Emails(): Email[] {
    return this.emails;
  }

  public get UserData(): IPasswordData[] {
    return this.userPasswordDetails;
  }
  

  private addDefaultData() {
    this.addSite('FB');
    this.addSite('Github');
    this.addSite('Whatsapp');
    this.addSite('Gmail');
    this.addSite('Outlook');

    this.addEmail('prash****a@gmail.com');
    this.addEmail('prash****aa@gmail.com');
    this.addEmail('prash****a@outlook.com');
    this.addEmail('prash****aa@oulook.com');

    this.addPhoneNo(970, PhoneNoTye.Primary);
    this.addPhoneNo(801, PhoneNoTye.Secondary);

    this.addUsePasswordData(this.emails[0].email, this.phoneNos[0].PhoneNo, this.sites[0].site, '123456');
    this.addUsePasswordData(this.emails[1].email, this.phoneNos[0].PhoneNo, this.sites[1].site, '1234561');
    this.addUsePasswordData(this.emails[2].email, this.phoneNos[0].PhoneNo, this.sites[2].site, '123456');
    this.addUsePasswordData(this.emails[0].email, this.phoneNos[1].PhoneNo, this.sites[0].site, '123456');
  }


}
