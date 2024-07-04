import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChillerComponent } from './chiller/chiller.component';

const routes: Routes = [
  { path: '', redirectTo: 'urcweb/home', pathMatch: 'full' },
  { path: 'Chiller', component: ChillerComponent },
  // เพิ่ม Route อื่น ๆ ที่นี่
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
