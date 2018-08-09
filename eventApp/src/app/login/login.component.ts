import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router'
import {AuthService} from './../auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers : [AuthService]
})
export class LoginComponent implements OnInit {

  constructor(private  authService : AuthService, private router : Router) { }

  ngOnInit() {
  }


  loginUserData ={}



  loginUser()
   {
       console.log('loginUser'+this.loginUserData);
       this.authService.loginUser(this.loginUserData)
       .subscribe(
         res =>{
          console.log(res)
         localStorage.setItem('token',res.token)
         this.router.navigate(['/special']);
          },
         err => console.log(err)
       )

   }



  loggedIn()
   {
     return !!localStorage.getItem('token');
   }



}
