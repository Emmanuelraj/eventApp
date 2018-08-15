import { Injectable } from '@angular/core';

import {HttpInterceptor} from '@angular/common/http';


//for the server to verify the token  we need to send the token to the server using HttpInterceptor


@Injectable()
export class TokenInterceptorService  implements HttpInterceptor
{

  constructor() { }



   intercept(request,next)
    {
          let tokenizedReq= request.clone({
            setHeaders:{
              Authorization :'Bearer xx.yy.zz'
            }
          })

          return next.handle(tokenizedReq)
    }

}
