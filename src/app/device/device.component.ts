import { Component, OnInit, Input } from '@angular/core';
import { DeviceService } from '../services/devices.service';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css']
})
export class DeviceComponent implements OnInit {

  @Input() id : number = 0;
  @Input() name : string = "";
  @Input() status : string = "";
  @Input() indexOfDevice : number = 0;

  constructor(private deviceService: DeviceService) {
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

  onSwitchOn() {
    this.deviceService.switchOnOne(this.indexOfDevice);
  }

  onSwitchOff() {
    this.deviceService.switchOffOne(this.indexOfDevice);
  }
}
