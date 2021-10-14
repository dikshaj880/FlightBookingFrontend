import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent implements OnInit {
  htmlToAdd: string ="";

  constructor(private route:Router,private loginService:LoginService) { }

  ngOnInit(): void {
  }

  addUser(formObj:any){
    console.log(formObj)
    this.loginService.signupUser(formObj).subscribe((Response)=>{
      console.log("User has been added")
      alert("You have been registered successfully !! Kinldy login and proceed")
      this.htmlToAdd = '<a routerLink="/userLogin"></a>';
      this.route.navigate(['/userLogin']);
    })
  }
}
