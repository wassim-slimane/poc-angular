import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isAuth = false;
  devices = [
    {
      name : "Machine à laver",
      status: "on",
    },
    {
      name : "Ordinateur",
      status: "on",
    },
    {
      name : "TV",
      status: "off",
    },
    {
      name : "micro-ondes",
      status: "off",
    },
  ];

  lastUpdate = new Promise(
    (resolve, reject) => {
      const date = new Date();
      setTimeout( () => {
        resolve(date);
      }, 2000);
    }
  );

  constructor() {
    setTimeout(() => {
      this.isAuth = this.isAuth === false ? true : false;
    }, 4000);
  }

  onTurnLightOn() {
    console.log("on Up all");
  }
}
