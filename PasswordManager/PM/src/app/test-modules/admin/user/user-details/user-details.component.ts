import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.logCurrentLocation();
    // this.router.queryParams.subscribe((p: any) => {
    //   alert(p);
    // })
  }

  longitude: number | undefined= undefined;
  lattitude: number | undefined = undefined;
  private logCurrentLocation() {
    let location = window.navigator.geolocation.getCurrentPosition(
      (l) => {
        this.longitude = l.coords.longitude;
        this.lattitude = l.coords.latitude;
      }
    );
  }



}
