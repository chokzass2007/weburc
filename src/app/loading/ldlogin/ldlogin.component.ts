// loading/ldlogin/ldlogin.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-ldlogin',
  templateUrl: './ldlogin.component.html',
  styleUrls: ['./ldlogin.component.css']
})
export class LDloginComponent {
  username: string = '';
  password: string = '';

  onSubmit() {
    // เขียน logic การ login ที่นี่
    console.log('Login form submitted', this.username, this.password);
  }
}
