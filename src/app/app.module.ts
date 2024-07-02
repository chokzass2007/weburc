import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    // ลบ Test01Component ออกถ้าคุณยังเห็นอยู่
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]  // ใช้ AppComponent เป็นคอมโพเนนต์เริ่มต้น
})
export class AppModule { }
