import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChillerComponent } from './chiller/chiller.component';
import { LDloginComponent } from './loading/ldlogin/ldlogin.component';
import { LDmainComponent } from './loading/ldmain/ldmain.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'urcweb/home', pathMatch: 'full' },
  { path: 'Chiller', component: ChillerComponent },
  { path: 'loading/ldlogin', component: LDloginComponent },
  { path: 'loading/ldmain', component: LDmainComponent },
  { path: '**', component: NotFoundComponent },
  // เพิ่ม Route อื่น ๆ ที่นี่
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],  // useHash: false เพื่อใช้ History API
  exports: [RouterModule]
})
export class AppRoutingModule { }
