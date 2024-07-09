import { Component, OnInit  } from '@angular/core';
@Component({
  selector: 'app-chiller',
  templateUrl: './chiller.component.html',
  styleUrls: ['./chiller.component.css'],
  // standalone: true,
})

export class ChillerComponent implements OnInit {
  title = 'Chiller';
  groups: { [key: string]: any[] } = {};
  filteredGroups: { [key: string]: any[] } = {};
  previousGroups: { [key: string]: any[] } = {};
  isFirstLoad: boolean = true;
  isFirstDataReceived: boolean = false;
  socket!: WebSocket;

  searchAddress: string = '';
  descriptions: { [key: number]: string } = {
    121: 'CH.2 Suction Temp',
    122: 'CH.2 Discharge Temp',
    123: 'CH.2 Liquid Temp',
    124: 'CH.2 Water Freeze Temp',
    125: 'CH.2 Evap Pressure',
    126: 'CH.2 Cond Pressure',
    129: 'CH.2 Entring Evap Water Temp',
    130: 'CH.2 Leaving Evap Water Temp',
    131: 'CH.2 Entring Cond Water Temp',
    132: 'CH.2 Leaving Cond Water Temp',
    133: 'CH.2 Curent R',
    134: 'CH.2 Curent S',
    135: 'CH.2 Curent T',
    170: 'CH.2 Show Sequence Start Comp',
    171: 'CH.2 Status Comp1',
    172: 'CH.2 Status Comp2',
    173: 'CH.2 Status Comp3',
    174: 'CH.2 Time First Start',
    175: 'CH.2(M100-M115) Send RS485 TO M100 - M115',
    176: 'CH.2(M20-M35) Send RS485 TO M120 - M135',
    177: 'CH.2(X0-X17) Send RS485 TO M140 - M155',
    178: 'CH.2(Y0-Y17) Send RS485 TO M160 - M175',

    221: 'CH.2 Suction Temp',
    222: 'CH.2 Discharge Temp',
    223: 'CH.2 Liquid Temp',
    224: 'CH.2 Water Freeze Temp',
    225: 'CH.2 Evap Pressure',
    226: 'CH.2 Cond Pressure',
    229: 'CH.2 Entring Evap Water Temp',
    230: 'CH.2 Leaving Evap Water Temp',
    231: 'CH.2 Entring Cond Water Temp',
    232: 'CH.2 Leaving Cond Water Temp',
    233: 'CH.2 Curent R',
    234: 'CH.2 Curent S',
    235: 'CH.2 Curent T',
    270: 'CH.2 Show Sequence Start Comp',
    271: 'CH.2 Status Comp1',
    272: 'CH.2 Status Comp2',
    273: 'CH.2 Status Comp3',
    274: 'CH.2 Time First Start',
    275: 'CH.2(M100-M115) Send RS485 TO M100 - M115',
    276: 'CH.2(M20-M35) Send RS485 TO M120 - M135',
    277: 'CH.2(X0-X17) Send RS485 TO M140 - M155',
    278: 'CH.2(Y0-Y17) Send RS485 TO M160 - M175',

    321: 'CH.3 Suction Temp',
    322: 'CH.3 Discharge Temp',
    323: 'CH.3 Liquid Temp',
    324: 'CH.3 Water Freeze Temp',
    325: 'CH.3 Evap Pressure',
    326: 'CH.3 Cond Pressure',
    329: 'CH.3 Entring Evap Water Temp',
    330: 'CH.3 Leaving Evap Water Temp',
    331: 'CH.3 Entring Cond Water Temp',
    332: 'CH.3 Leaving Cond Water Temp',
    333: 'CH.3 Curent R',
    334: 'CH.3 Curent S',
    335: 'CH.3 Curent T',
    370: 'CH.3 Show Sequence Start Comp',
    371: 'CH.3 Status Comp1',
    372: 'CH.3 Status Comp2',
    373: 'CH.3 Status Comp3',
    374: 'CH.3 Time First Start',
    375: 'CH.3(M100-M115) Send RS485 TO M100 - M115',
    376: 'CH.3(M20-M35) Send RS485 TO M120 - M135',
    377: 'CH.3(X0-X17) Send RS485 TO M140 - M155',
    378: 'CH.3(Y0-Y17) Send RS485 TO M160 - M175',

    401: 'AHU Supply Temp',
    402: 'AHU Supply %RH',
    403: 'AHU Return Temp',
    404: 'AHU Return %RH',
    405: 'AHU Ambient Temp',
    406: 'AHU Ambient %RH',
    408: 'AHU Entering Water Cool',
    409: 'AHU Leaving Water Cool',
    410: 'AHU Entering Water Hot',
    411: 'AHU Leaving Water Hot',
    412: 'AHU Open Dumper',
    414: 'AHU P.Return Air',
    415: 'AHU P.Return Air',
    420: 'AHU Show Status AHU',
    421: 'AHU Show Status Dumper',
    422: 'AHU Input Data Open Dumper',
    423: 'AHU Data Output Cool 3Way 1',
    424: 'AHU Data Output VSD Motor AHU',
    425: 'AHU Data Output Hot 3Wat',
    426: 'AHU Data Send To RS485',
    // เพิ่มคำอธิบายที่นี่
  };

  groupDescriptions: { [key: string]: string } = {
    'data120': 'Address Chiller No.1',
    'data220': 'Address Chiller No.2',
    'data320': 'Address Chiller No.3',
    'data400': 'Address AHU',
    'data5100': 'Address Regitter 6_0',
    'data5200': 'Address Regitter 7_0',
    'data5300': 'Address Regitter 8_0',
    'data5400': 'Address Regitter 9_0',
    // เพิ่มชื่อกลุ่มและคำบรรยายที่นี่
  };

  rows: any[] = [];
  groupKeys: string[] = [];

  ngOnInit() {
    this.connectWebSocket();
  }

  connectWebSocket() {
    this.socket = new WebSocket('ws://192.0.6.111:3001');

    this.socket.onopen = () => {
      console.log('WebSocket connection established');
      this.getAllUser();
    };

    this.socket.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);

        if (!this.isFirstDataReceived) {
          this.isFirstDataReceived = true;
          this.previousGroups = { ...this.groups };
          this.groups = data;
          this.isFirstLoad = false;
        } else {
          this.previousGroups = { ...this.groups };

          // อัปเดตกลุ่มด้วยข้อมูลใหม่
          Object.keys(data).forEach(key => {
            if (!this.groups[key]) {
              this.groups[key] = [];
            }
            this.groups[key] = data[key];
          });
        }

        // อัปเดต groupKeys และ filteredGroups
        this.groupKeys = Object.keys(this.groups);
        this.filterGroup();

      } catch (error) {
        console.error('Error parsing message from server', error);
        this.groups = {};
        this.filteredGroups = {};
      }
    };

    this.socket.onerror = (error) => {
      console.error('WebSocket error:', error);
    };

    this.socket.onclose = (event) => {
      console.log('WebSocket connection closed', event);
      if (!event.wasClean) {
        console.log('Attempting to reconnect...');
        setTimeout(() => {
          this.connectWebSocket();
        }, 5000); // เชื่อมต่อใหม่หลังจาก 5 วินาที
      }
    };
  }

  getAllUser() {
    if (this.socket && this.socket.readyState === WebSocket.OPEN) {
      this.socket.send(JSON.stringify({ action: 'getAllUser' }));
    } else {
      console.warn('WebSocket connection is not open.');
    }
  }

  populateRows() {
    const maxLength = Math.max(...this.groupKeys.map(key => this.filteredGroups[key]?.length || 0));

    this.rows = [];
    for (let i = 0; i < maxLength; i++) {
      const row: any = { changed: {} };
      this.groupKeys.forEach(key => {
        row[key] = this.filteredGroups[key]?.[i];
        row.changed[key] = this.checkForChanges(row[key], key);
      });

      this.rows.push(row);
    }
  }

  checkForChanges(data: any, key: string): any {
    if (this.isFirstLoad || !data) return {};

    const changes: any = {
      address: false,
      value: false,
      description: false,
    };

    const prevData = this.previousGroups[key]?.find(item => item.address === data.address);
    if (prevData) {
      changes.address = prevData.address !== data.address || prevData.value !== data.value || prevData.description !== data.description;
      changes.value = prevData.value !== data.value;
      changes.description = prevData.description !== data.description || prevData.value !== data.value;
    }

    return changes;
  }

  filterGroup() {
    const search = this.searchAddress.toString();
    if (search) {
      this.filteredGroups = {};
      this.groupKeys.forEach(key => {
        this.filteredGroups[key] = this.groups[key]?.filter(user =>
          user.address.toString().includes(search)
        ) || [];
      });
    } else {
      this.filteredGroups = { ...this.groups };
    }
    this.populateRows();
  }

  getDescription(address: number): string {
    return this.descriptions[address] || '';
  }

  getGroupDescription(key: string): string {
    return this.groupDescriptions[key] || key; // คืนค่า key หากไม่พบใน groupDescriptions
  }
}
