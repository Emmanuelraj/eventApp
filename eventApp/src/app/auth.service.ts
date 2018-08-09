import { Injectable } from '@angular/core';

import { HttpClient} from '@angular/common/http';

import {Http,Response,Headers,RequestOptions} from '@angular/http';

import {Observable} from 'rxjs/Observable';


import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }



  private _registertUrl ='http://localhost:3000/api/register';


  private _loginUrl = 'http://localhost:3000/api/login';


   registerUser(user)
   {
         return this.http.post<any>(this._registertUrl, user); //Observable
   }


  loginUser(user)
  {
    return this.http.post<any>(this._loginUrl, user);//Observable
  }



  isLoggedIn()
   {
     return !!localStorage.getItem('token')
   }

}
