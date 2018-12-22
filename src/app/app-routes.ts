import { Routes } from '@angular/router';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { EventListComponent } from './events/event-list/event-list.component';
import { CreateEventComponent } from './events/create-event/create-event.component';
import { NotFound404Component } from './shared/errors/not-found404/not-found404.component';
import { EventsResolverService } from './services/events-resolver.service';
import { CreateSessionComponent } from './events/create-session/create-session.component';
import { EventResolverService } from './services/event-resolver.service';

export const AppRoutes: Routes = [
  { path: 'notFound', component: NotFound404Component },
  { path: 'event/session/new', component: CreateSessionComponent},
  { path: 'event/new', component: CreateEventComponent, canDeactivate: ['canDeactivateEvent'] },
  { path: 'events', component: EventListComponent, resolve: {events: EventsResolverService} },
  { path: 'event/:id', component: EventDetailsComponent, resolve: {event: EventResolverService}},
  { path: 'user', loadChildren: 'src/app/user/user.module#UserModule'},
  { path: '', pathMatch: 'full', redirectTo: 'events' },
  { path: '**', pathMatch: 'full', redirectTo: 'notFound' }
  ];
