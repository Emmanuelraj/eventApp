import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http'


@Injectable()
export class EventService {

  constructor(private http: HttpClient) { }

  private _eventsUrl = 'http://localhost:3000/api/events';


  private _specialEventsUrl ='http://localhost:3000/api/special'



  getAllEvent()
   {
       console.log('get All Event')
       return this.http.get<any>(this._eventsUrl);
   }



   getAllSpecialEvent()
   {
     console.log('get All Special Event in service');
     return this.http.get<any>(this._specialEventsUrl);
   }
}
