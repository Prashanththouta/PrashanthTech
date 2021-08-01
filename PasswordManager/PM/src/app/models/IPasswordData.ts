import { Email } from "./EMail.interface";
import { PhoneNo } from "./PhoneNo.interface";
import { Site } from "./Site.interface";

export interface IPasswordData {
  site: Site;
  email: Email;
  phoneNo: PhoneNo;
  password: string;
}