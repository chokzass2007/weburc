import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes';
import { ChillerComponent } from './chiller/chiller.component';
import { LDloginComponent } from './loading/ldlogin/ldlogin.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './auth.service'; // เพิ่มการนำเข้า
@NgModule({
  declarations: [
    AppComponent,
    ChillerComponent,
    LDloginComponent,
    // ลบ Test01Component ออกถ้าคุณยังเห็นอยู่
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule, 
    AppRoutingModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]  // ใช้ AppComponent เป็นคอมโพเนนต์เริ่มต้น
})
export class AppModule { }
