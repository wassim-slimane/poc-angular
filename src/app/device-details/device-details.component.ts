import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DeviceService } from '../services/devices.service';

@Component({
  selector: 'app-device-details',
  templateUrl: './device-details.component.html',
  styleUrls: ['./device-details.component.css']
})
export class DeviceDetailsComponent implements OnInit {

  name: any = "Name";
  status: any = "Status"

  constructor(
    private deviceService: DeviceService, 
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id']
    this.name = this.deviceService.getDeviceById(+id) === undefined ? this.router.navigate(['devices']) : this.deviceService.getDeviceById(+id)?.name;
    this.status = this.deviceService.getDeviceById(+id) === undefined ? this.router.navigate(['devices']) : this.deviceService.getDeviceById(+id)?.status;
  }

}
