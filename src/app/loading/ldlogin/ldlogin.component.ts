// src/app/loading/ldlogin/ldlogin.component.ts
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-ldlogin',
  templateUrl: './ldlogin.component.html',
  styleUrls: ['./ldlogin.component.css']
})
export class LDloginComponent implements OnInit {
  user: any;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.getUser().subscribe(data => {
      this.user = data;
    });
  }
}
