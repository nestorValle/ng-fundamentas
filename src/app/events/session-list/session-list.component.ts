import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ISession } from 'src/app/Shared/event.module';
import { VoterService } from 'src/app/services/voter.service';
import { LoginService } from 'src/app/services/login.service';

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
  constructor(private voterService: VoterService, public auth: LoginService) { }

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

  toogleVote(session: ISession) {
    if (this.userHasVoted(session)) {
      this.voterService.deleteVoter(session, this.auth.currentUser.firtName);
    } else {
      this.voterService.addVoter(session, this.auth.currentUser.firtName);
    }
    this.sessionSortBy();
  }

  userHasVoted(session: ISession) {
    return this.voterService.userHasVoted(session, this.auth.currentUser.firtName);
  }

  private sessionSortBy() {
    if (this.sortBy === 'name') {
      this.filteredSessions.sort(this.byNameAsc);
    }
    if (this.sortBy === 'voters') {
      this.filteredSessions.sort(this.byVotersDesc);
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
  byVotersDesc(s1: ISession, s2: ISession) {
    return s2.voters.length - s1.voters.length;
  }

}
