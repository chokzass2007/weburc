import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ldlogin',
  templateUrl: './ldlogin.component.html',
  styleUrls: ['./ldlogin.component.css']
})
export class LDloginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}
  ngOnInit(): void {
    // ลบข้อมูลจาก sessionStorage ก่อนการล็อกอิน
    sessionStorage.removeItem('usernameAD');
    sessionStorage.removeItem('tokenLoading');
  }
  onSubmit(): void {
    this.authService.login(this.username, this.password).subscribe(
      response => {
        // ตรวจสอบว่า tokenloading มีค่าเป็น 'true'
        if (sessionStorage.getItem('tokenLoading') === '1') {
         // alert('ยินดีต้อนรับ');
          this.router.navigate(['/loading/ldmain']);
        } else {
          alert('คุณไม่มีสิทเข้าใช้งานโปรแกรม');
        }
      },
      error => {
        alert('ล็อกอินล้มเหลว: ' + (error.error || 'Unknown error'));
      }
    );
  }
}
