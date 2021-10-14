import { Component, OnInit } from '@angular/core';
//import { getMaxListeners } from 'process';
import {Router} from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  htmlToAdd: string ="";
  user: any;

  constructor(private route:Router,private loginService:LoginService) { }

  ngOnInit(): void {
  }
  email:string ="";
  password:string ="";
  username:string="";
  
  loginUser(formObj:any){
    console.log(formObj)
    this.loginService.loginUser(formObj).subscribe((Response)=>{
      console.log('inside login method');
        console.log(Response.roles[0]);
        sessionStorage.setItem('username', Response.username);
        let tokenStr = 'Bearer ' + Response.accessToken;
        sessionStorage.setItem('token', tokenStr);
        sessionStorage.setItem('id', Response.id);
        this.user = Response;
        this.redirect();
    })
  }
  redirect() {
    if(this.user.roles[0] == "ROLE_ADMIN"){
      this.htmlToAdd = '<a routerLink="/adminMenu"></a>';
      this.route.navigate(['/adminMenu']);
    }
    else if(this.user.roles[0] == "ROLE_USER"){
      this.htmlToAdd = '<a routerLink="/userMenu"></a>';
      this.route.navigate(['/userMenu']);
    }
  
  }

  logOut() {
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('id');
  }

}
