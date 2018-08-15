import { Injectable } from '@angular/core';

import{HttpClient} from '@angular/common/http';

import{Router} from '@angular/router'

@Injectable()
export class AuthService {

  constructor(private http : HttpClient, private router : Router) { }



  private  _registerUrl = 'http://localhost:3000/api/register';

  private _loginUrl ='http://localhost:3000/api/login';





    getRegister(user)
     {
       console.log('service getRegister method')
      return this.http.post<any>(this._registerUrl, user);
     }



   getLogin(user)
   {
     console.log('get Login method');
      return this.http.post<any>(this._loginUrl,user);//Observables

   }


   isLoggedIn()
   {
     console.log('logged in')
     return !!localStorage.getItem('token');
   }


   loggedOut()
   {
     console.log('loggedOut');
     this.router.navigate(['/events']);
     return localStorage.removeItem('token');

   }





}
