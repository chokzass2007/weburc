import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-ldlogin',
  templateUrl: './LDlogin.component.html',
  styleUrls: ['./LDlogin.component.css']
})
export class LDloginComponent {
  username!: string;
  password!: string;

  constructor(private authService: AuthService, private router: Router) { }

  onSubmit() {
    this.authService.login(this.username, this.password).subscribe(
      (response: any) => {
        if (response.tokenloading) {
          alert(`ยินดีต้อนรับ ${this.username}`);
          this.router.navigate(['/loading/ldmain']);
        } else {
          alert('คุณไม่มีสิทเข้าใช้งานโปรแกรม');
        }
      },
      (error) => {
        alert('ล็อกอินล้มเหลว: ' + error.message);
      }
    );
  }
}
