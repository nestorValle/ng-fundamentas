import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { EventsService } from 'src/app/services/events.service';

@Injectable({
  providedIn: 'root'
})
export class EventrouterGuard implements CanActivate {
  constructor(private eventService: EventsService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      const id = +next.params['id'];
      const existEvent = !!this.eventService.getEvent(+next.params['id']);
      console.log(existEvent);
      if (!existEvent || isNaN(id)) {
        this.router.navigate(['notFound']);
        return existEvent;
      }
    return existEvent;
  }
}
