import { Component, OnInit } from '@angular/core';
import {AuthService} from './../auth.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers :[AuthService]
})
export class RegisterComponent implements OnInit {

  constructor(private authService : AuthService, private router : Router) { }

  ngOnInit() {
  }

    registeredUserData ={}


   register()
   {
     console.log('register User');
    this.authService.getRegister(this.registeredUserData)
    .subscribe(
      response=> {
        console.log(response),
        this.router.navigate(['/login']),
        localStorage.setItem('token',response.token)
      },
           err=> console.log(err)
        )

   }






}
