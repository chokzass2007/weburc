import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-test02-get',
  standalone: true,
  imports: [],
  templateUrl: './test02-get.component.html',
  styleUrl: './test02-get.component.css'
})
export class Test02GetComponent {
userList : any [] = [];
constructor(private http: HttpClient){


}
// getAllUser(){
//   debugger;
//   this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((result:any)=>{
//   debugger;
// this.userList = result
//   })
// }

}
