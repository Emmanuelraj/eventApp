import { Component, OnInit } from '@angular/core';

import {EventService} from './../event.service';

@Component({
  selector: 'app-special-events',
  templateUrl: './special-events.component.html',
  styleUrls: ['./special-events.component.css'],
  providers :[EventService]
})
export class SpecialEventsComponent implements OnInit {


specialEvents =[];

  constructor(private eventService :EventService) { }

  ngOnInit() {

    this.eventService.getAllSpecialEvent()
    .subscribe(
        res =>this.specialEvents = res,
        err => console.log(err)
    )
  }




}
