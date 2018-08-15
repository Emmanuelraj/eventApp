import { Injectable } from '@angular/core';
import { CanActivate,Router} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from './auth.service'

@Injectable()
export class AuthGuard implements CanActivate
{

    constructor(private authSerivce: AuthService, private router : Router)
     {

     }


   canActivate():boolean{
     if(this.authSerivce.isLoggedIn())
     {
        return true;
     }
     else
     {
       this.router.navigate(['/login'])
       return false
     }
}



}
