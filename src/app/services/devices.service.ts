import { Subject } from "rxjs";

export class DeviceService {
    
  deviceSubject = new Subject<any[]>();
  
  private devices = [
        {
          id: 1,
          name : "Machine à laver",
          status: "on",
        },
        {
          id: 2,
          name : "Ordinateur",
          status: "on",
        },
        {
          id: 3,
          name : "TV",
          status: "off",
        },
        {
          id: 4,
          name : "micro-ondes",
          status: "off",
        },
    ];

    emitDeviceSubject() {
      this.deviceSubject.next(this.devices.slice());
    }

    getDeviceById(id: number) {
      const device = this.devices.find( device => {
        return device.id === id;
      })
      return device;
    }

    switchOnAll() {
        for (let device of this.devices) {
            device.status = "on";
        }
        this.emitDeviceSubject();
    }
    
    switchOffAll() {
        for (let device of this.devices) {
            device.status = "off";
        }
        this.emitDeviceSubject();
    }

    switchOnOne(index: number) {
        this.devices[index].status = "on";
        this.emitDeviceSubject();
    }

    switchOffOne(index: number) {
        this.devices[index].status = "off";
        this.emitDeviceSubject();
    }

    addDevice(name: string, status: string) {
      const device = {
        id: this.devices[this.devices.length - 1].id + 1,
        name: name,
        status: status,
      }
      this.devices.push(device);
      this.emitDeviceSubject();
    }
}