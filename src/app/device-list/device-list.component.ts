import { Component, OnInit } from '@angular/core';
import { DeviceService } from '../services/devices.service';

@Component({
  selector: 'app-device-list-component',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.css']
})
export class DeviceListComponent implements OnInit {

  isAuth = false;
  devices: any = [];
  devicesSubscription: any;

  lastUpdate = new Date()

  constructor(private deviceService: DeviceService) {
    setTimeout(() => {
      this.isAuth = this.isAuth === false ? true : false;
    }, 4000);
  }
  
  ngOnInit(): void {
    this.devicesSubscription = this.deviceService.deviceSubject.subscribe((value: any[]) => {
      this.devices = value;
    });
    this.deviceService.emitDeviceSubject();
  }

  onTurnLightOff() {
    this.deviceService.switchOffAll();
  }

  onTurnLightOn() {
    this.deviceService.switchOnAll();
  }

}
