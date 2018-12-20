import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ISession } from 'src/app/Shared/event.module';

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css']
})
export class SessionListComponent implements OnInit, OnChanges {
@Input() sessions: ISession[];
@Input() filterBy: string;
@Input() sortBy: string;

filteredSessions: ISession[];
  constructor() { }

  ngOnInit() {
    if (this.sessions) {
        this.filteredSessions = this.sessions.slice();
    }
  }

  ngOnChanges() {
    if (this.sessions) {
      if (this.filterBy === 'all') {
        this.filteredSessions = this.sessions.slice();
        this.sessionSortBy();
      } else {
        this.filteredSessions = this.sessions
                                    .filter(sesion => sesion.level.toLocaleLowerCase() === this.filterBy);
        this.sessionSortBy();
      }
    }
  }
  private sessionSortBy() {
    if (this.sortBy === 'name') {
      this.filteredSessions.sort(this.byNameAsc);
    }
    if (this.sortBy === 'voters') {
      this.filteredSessions.sort(this.byVotersAsc);
    }
  }

  byNameAsc(s1: ISession, s2: ISession) {
    if (s1.name > s2.name) {
      return 1;
    } else if (s1.name === s2.name) {
      return 0;
    } else {
      return -1;
    }
  }
  byVotersAsc(s1: ISession, s2: ISession) {
    return s2.voters.length - s1.voters.length;
  }

}
