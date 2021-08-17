import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  currentUser: string = "";

  constructor(private http: HttpClient ) { }

  async getServerData() {
    let headers = new HttpHeaders({
     'Content-Type':'application/json; charset=utf-8;' 
      ,'Accept':'*/*'
    })
    let path = "https://localhost:44328/api/auth";
    // let path = "http://localhost:8082/api/auth";
    let data = await this.http.get(path, { headers }).toPromise();
    if (data) {
      console.log(data);
    }
     return data;
  }

}
