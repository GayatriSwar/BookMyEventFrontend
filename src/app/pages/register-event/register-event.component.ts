import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import { Event } from 'src/app/event';

@Component({
  selector: 'register-event',
  templateUrl: './register-event.component.html',
  styleUrls: ['./register-event.component.css']
})
export class RegisterEventComponent implements OnInit {

  events: Event[];
  event = new Event();
  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.refreshEvents()
  }

  refreshEvents() {
    this.eventService.getEvents()
      .subscribe(data => {
        this.events=data;
      })      
 
  }

}
