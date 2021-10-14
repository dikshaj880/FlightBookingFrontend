import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _http:HttpClient) { }

  HOST: string = 'http://localhost:9198/api/auth/signin';

  HOST1: string = 'http://localhost:9198/api/auth/signup';

  loginUser(login: any): Observable<any> {
    return this._http.post<any>(this.HOST, login)
  }

  signupUser(signup:any): Observable<any>{
    return this._http.post<any>(this.HOST1,signup)
  }

  logOut() {
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('id');
  }
}
