import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EventListComponent } from './events/event-list/event-list.component';
import { EventTumbnailComponent } from './events/event-tumbnail/event-tumbnail.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { CreateEventComponent } from './events/create-event/create-event.component';
import { NotFound404Component } from './shared/errors/not-found404/not-found404.component';
import { EventsResolverService } from './services/events-resolver.service';
import { CreateSessionComponent } from './events/create-session/create-session.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    EventTumbnailComponent,
    NavbarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    NotFound404Component,
    CreateSessionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    EventsResolverService,
    {
      provide: 'canDeactivateEvent',
      useValue: checkDirtyState
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function checkDirtyState(): boolean {
  return window.confirm('You do not saved this event, do you really want to cancel?');
}
