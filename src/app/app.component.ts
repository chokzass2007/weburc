import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Data Table';
  groups: { [key: string]: any[] } = {};
  filteredGroups: { [key: string]: any[] } = {};

  searchAddress: string = '';
  descriptions: { [key: number]: string } = {
    121: 'โชคสุดหล่อ',
    122: 'งานไว',
    // เพิ่มคำอธิบายที่นี่
  };

  rows: { data120?: any, data320?: any, data420?: any }[] = [];

  private socket!: WebSocket;

  constructor() {
    this.getAllUser();
  }

  getAllUser() {
    this.socket = new WebSocket('ws://192.0.6.111:3000');

    this.socket.onopen = () => {
      console.log('WebSocket connection established');
      this.socket.send(JSON.stringify({ action: 'getAllUser' }));
    };

    this.socket.onmessage = (event) => {
      console.log('Message from server', event.data);
      try {
        const data = JSON.parse(event.data);

        this.groups = {
          data120: data.data120 || [],
          data320: data.data320 || [],
          data420: data.data420 || []
        };

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
    };
  }

  populateRows() {
    const maxLength = Math.max(
      this.filteredGroups['data120'].length,
      this.filteredGroups['data320'].length,
      this.filteredGroups['data420'].length
    );

    this.rows = [];
    for (let i = 0; i < maxLength; i++) {
      this.rows.push({
        data120: this.filteredGroups['data120'][i],
        data320: this.filteredGroups['data320'][i],
        data420: this.filteredGroups['data420'][i]
      });
    }
  }

  filterGroup() {
    const search = this.searchAddress.toString();
    if (search) {
      this.filteredGroups = {
        data120: this.groups['data120'].filter(user =>
          user.address.toString().includes(search)
        ),
        data320: this.groups['data320'].filter(user =>
          user.address.toString().includes(search)
        ),
        data420: this.groups['data420'].filter(user =>
          user.address.toString().includes(search)
        )
      };
    } else {
      this.filteredGroups = { ...this.groups };
    }
    this.populateRows();
  }

  getDescription(address: number): string {
    return this.descriptions[address] || '';
  }
}
