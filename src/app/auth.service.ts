import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    const loginPayload = { username, password };
    return this.http.post<any>('/api/login', loginPayload, { withCredentials: true }).pipe(
      tap((response) => {
        // ตรวจสอบ response และจัดเก็บค่า username และ tokenLoading



        sessionStorage.setItem('usernameAD', response.username || '');
        sessionStorage.setItem('tokenLoading', response.tokenLoading || '');
        sessionStorage.setItem('displayNameLD', response.displayNameLD  || '');

        //ตรวจสอบตัวแปลที่รับมาจาก API
        // console.log(response);
        // console.log(sessionStorage.getItem('displayNameLD'));
        // console.log(response.username);
        // console.log(response.tokenLoading);
        // console.log(response.displayNameLD);



      })
    );
  }
}
