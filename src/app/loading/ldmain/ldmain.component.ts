import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ldmain',
  templateUrl: './ldmain.component.html',
  styleUrls: ['./ldmain.component.css']
})
export class LDmainComponent implements OnInit, OnDestroy {
  usernameAD: string = '';  // กำหนดค่าเริ่มต้น
  tokenloading: string = '';
  displayNameLD: string = '';
  private idleTimeout = 505000; // 5 วินาที
  private idleTimer: any;

  constructor(private router: Router) {}

  ngOnInit(): void {
    // ตรวจสอบค่า tokenLoading และเปลี่ยนเส้นทางหากไม่มีสิทเข้าใช้งาน
    this.usernameAD = sessionStorage.getItem('usernameAD') || '';
    this.tokenloading = sessionStorage.getItem('tokenLoading') || '';  
    this.displayNameLD = sessionStorage.getItem('displayNameLD') || '';  
    
    if (this.tokenloading === '0' || !this.tokenloading) {
      alert('คุณไม่มีสิทเข้าใช้งานโปรแกรม');
      this.router.navigate(['/loading/ldlogin']);
    } else {
      this.startIdleTimer();  // เริ่มจับเวลาเมื่อ Component โหลดเสร็จ
    }
  }

  ngOnDestroy(): void {
    // เมื่อ component ถูกทำลายให้เคลียร์ idleTimer และการฟังเหตุการณ์
    if (this.idleTimer) {
      clearTimeout(this.idleTimer);
    }
    this.stopListening();
  }

  startIdleTimer(): void {
    // เริ่มจับเวลาใหม่
    this.idleTimer = setTimeout(() => {
      this.logout();  // เรียกใช้ฟังก์ชัน logout ถ้า Idle Timeout เกิน 5 วินาที
    }, this.idleTimeout);
    
    // ฟังเหตุการณ์การเคลื่อนไหวของเมาส์และการกดแป้นพิมพ์
    this.startListening();
  }

  resetIdleTimer(): void {
    // รีเซ็ต idle timer
    clearTimeout(this.idleTimer);
    this.idleTimer = setTimeout(() => {
      this.logout();
    }, this.idleTimeout);
  }

  startListening() {
    // เริ่มฟังเหตุการณ์
    document.addEventListener('mousemove', this.resetIdleTimer.bind(this));
    document.addEventListener('keypress', this.resetIdleTimer.bind(this));
    document.addEventListener('click', this.resetIdleTimer.bind(this));
  }

  stopListening() {
    // หยุดฟังเหตุการณ์
    document.removeEventListener('mousemove', this.resetIdleTimer.bind(this));
    document.removeEventListener('keypress', this.resetIdleTimer.bind(this));
    document.removeEventListener('click', this.resetIdleTimer.bind(this));
  }

  logout(): void {
    // เคลียร์ข้อมูลใน sessionStorage และเปลี่ยนหน้าไปยังหน้า login
    sessionStorage.removeItem('usernameAD');
    sessionStorage.removeItem('tokenLoading');
    this.router.navigate(['/loading/ldlogin']);
  }

  toggleLanguage(){
    console.log('Language toggled');
  }

}
