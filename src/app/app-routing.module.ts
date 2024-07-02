import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Test02Component } from './test02/test02.component';

const routes: Routes = [
  { path: 'test02', component: Test02Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
