export class DeviceService {
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

    switchOnAll() {
        for (let device of this.devices) {
            device.status = "on";
        }
    }
    
    switchOffAll() {
        for (let device of this.devices) {
            device.status = "off";
        }
    }

    switchOnOne(index: number) {
        this.devices[index].status = "on";
    }

    switchOffOne(index: number) {
        this.devices[index].status = "off";
    }
}