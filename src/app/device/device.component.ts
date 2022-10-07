import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css']
})
export class DeviceComponent implements OnInit {

  @Input() name : string = "";
  @Input() status : string = "";

  constructor() {
  }

  ngOnInit(): void {
  }

  getStatus() {
    return this.status;
  }

  changeStatus() {
    this.status = this.status === "off" ? "on" : "off";
    console.log("Change Status : " + this.status); 
  }

  isOff(): boolean {    
    return this.status === "off" ? true : false;
  }

  isOn(): boolean {    
    return this.status === "on" ? true : false;
  }

  getTitleColor(): string {
    return this.status === "on" ? "green" : "red"
  }
}
