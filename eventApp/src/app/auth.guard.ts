import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from './auth.service'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  private constructor(private _authService : AuthService, private _router :Router)
  {

  }


  canActivate():boolean(
      if(this._authService.isLoggedIn())
       {
         return true;
       }
       else
       {
         this_router.navigate(['/login'])
         return false
       }
  }


}
