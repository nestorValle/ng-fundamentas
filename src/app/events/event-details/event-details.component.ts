import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/app/services/events.service';
import { ActivatedRoute } from '@angular/router';
import { ISession } from 'src/app/Shared/event.module';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  event: any;
  addMode: boolean;
  filterBy: string;
  sortBy: string;
  constructor(private eventService: EventsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.filterBy = 'all';
    this.route.params.subscribe(params =>
      this.event = this.eventService.getEvent(+params['id'])
      );
  }
  addSession() {
    this.addMode = true;
  }
  saveNewSession(session: ISession) {
    this.eventService.addSessionToEvent(this.event, session);
    this.addMode = false;
  }
}
