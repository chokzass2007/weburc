import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-test01',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './test01.component.html',
  styleUrls: ['./test01.component.css']
})
export class Test01Component {
  searchTerm: string = '';
  items = [
    { address: 121, value: 74 },
    { address: 122, value: 549 },
    { address: 123, value: 16 },
    { address: 124, value: 119 },
    // เพิ่มข้อมูลอื่นๆ ตามที่คุณต้องการ
  ];
}
