import { Component, OnInit } from '@angular/core';

import {AuthService} from './../auth.service'


import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers :[AuthService]
})
export class LoginComponent implements OnInit {

  constructor(private authService : AuthService, private router : Router) { }

  ngOnInit() {
  }

   loginUserData = {}
  login()
  {
    console.log('login method'+this.loginUserData);
    this.authService.getLogin(this.loginUserData)
    .subscribe(
        res =>{
          console.log(res),
          this.router.navigate(['/special']),
          localStorage.setItem('token',res.token)
        },
          //
        err => console.log(err)
    )
   }





}
