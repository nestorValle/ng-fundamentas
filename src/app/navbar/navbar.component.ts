import { Component, OnInit, ViewChild, ElementRef, Inject } from '@angular/core';
import { LoginService } from '../services/login.service';
import { EventsService } from '../services/events.service';
import { ISession } from '../Shared/event.module';
import { JQ_TOKEN } from '../Shared/jQuery.injectorToke';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  searchTerm: string;
  matchedSessions: any[];
  @ViewChild('modalSession') modalSession: ElementRef;
  constructor(
    public loginService: LoginService,
    private eventsService: EventsService,
    @Inject(JQ_TOKEN) private $: any) { }

  ngOnInit() {
    this.searchTerm = '';
  }
  searchSession() {
    this.eventsService.sessionSearch(this.searchTerm)
    .subscribe(sub => this.matchedSessions = sub);
  }
  hideModal() {
    this.$(this.modalSession.nativeElement).modal('hide');
  }
}
