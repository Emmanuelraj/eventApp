import { Component, OnInit } from '@angular/core';
import {EventService} from './../event.service'

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
  providers :[EventService]
})
export class EventsComponent implements OnInit {



  events = []
  constructor(private eventService : EventService) { }

//


  ngOnInit()
  {
       this.eventService.getAllEvent()
       .subscribe(
         res  => this.events = res,
         err => console.log(err)
       )
  }

}
