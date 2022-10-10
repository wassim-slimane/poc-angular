import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {

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

  lastUpdate = new Date()

  constructor() {
    setTimeout(() => {
      this.isAuth = this.isAuth === false ? true : false;
    }, 4000);
  }

  onTurnLightOn() {
    console.log("on Up all");
  }

  ngOnInit(): void {
  }

}
