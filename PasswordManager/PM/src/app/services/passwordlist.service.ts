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
  private userPasswordDetails: IPasswordData[] = [];

  constructor() {
    this.addDefaultData();
  }

  addUsePasswordData(email: Email, phoneNo: PhoneNo, site: Site, password: string) {
    this.userPasswordDetails.push({ email: email, phoneNo: phoneNo, site: site, password: password });
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

    this.addUsePasswordData(this.emails[0], this.phoneNos[0], this.sites[0], '123456');
    this.addUsePasswordData(this.emails[1], this.phoneNos[0], this.sites[1], '1234561');
    this.addUsePasswordData(this.emails[2], this.phoneNos[0], this.sites[2], '123456');
    this.addUsePasswordData(this.emails[0], this.phoneNos[1], this.sites[0], '123456');
  }


}
