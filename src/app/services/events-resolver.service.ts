import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { EventsService } from './events.service';
import { map } from 'rxjs/operators';

@Injectable()
export class EventsResolverService implements Resolve<any> {
  constructor(private eventService: EventsService) { }
  resolve() {
    return this.eventService.getEvents().pipe(map(events => events));
  }
}
