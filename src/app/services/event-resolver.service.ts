import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { IEvent } from '../Shared/event.module';
import { EventsService } from './events.service';

@Injectable({
  providedIn: 'root'
})
export class EventResolverService implements Resolve<IEvent> {

  constructor(private eventsService: EventsService) { }
  resolve(rout: ActivatedRouteSnapshot) {
    return this.eventsService.getEvent(rout.params['id']);
  }
}
