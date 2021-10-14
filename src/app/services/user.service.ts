import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http:HttpClient) { }

  createUser(user:any){
    return this._http.post("http://localhost:3000/users",user);
  }
}
