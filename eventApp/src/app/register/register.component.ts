import { Component, OnInit } from '@angular/core';
import {AuthService} from './../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers:[AuthService]
})
export class RegisterComponent implements OnInit {

  constructor(private authService : AuthService, private router : Router )
  {
   }

  ngOnInit()
  {
  }

  registerUserData ={  }


  registerUser()
  {
     console.log('registerUser'+this.registerUserData);
     this.authService.registerUser(this.registerUserData)
       .subscribe(
         res=>{
            console.log(res)
           localStorage.setItem('token',res.token)
           this.router.navigate(['/special']);

         },
           err=> console.log(err)
       )
  }




}
