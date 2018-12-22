import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement, NO_ERRORS_SCHEMA} from '@angular/core';
import { SessionListComponent } from './session-list.component';
import { ISession } from 'src/app/Shared/event.module';
import { VoterService } from 'src/app/services/voter.service';
import { LoginService } from 'src/app/services/login.service';
import { By } from '@angular/platform-browser';
import { UpvoteComponent } from '../upvote/upvote.component';
import { CollapsibleWellComponent } from 'src/app/Shared/collapsible-well/collapsible-well.component';
import { DurationPipe } from 'src/app/Shared/duration.pipe';

describe('SessionListComponent', () => {
  let fixture: ComponentFixture<SessionListComponent>;
  let component: SessionListComponent;
  let element: HTMLElement;
  let debugElement: DebugElement;

  beforeEach(async(() => {
    const mockLogingService = {
      isAuthenticated: () => true,
      currentUser: {}
    };
    const mockVoterService = {};
    // set the configuration like in appModel
    TestBed.configureTestingModule({
      imports: [],
      declarations: [ SessionListComponent, UpvoteComponent, CollapsibleWellComponent, DurationPipe ],
      // mock the service provider
      providers: [
        {provide: VoterService, userValue: mockVoterService},
        {provide: LoginService, userValue: mockLogingService}
      ],
      schemas: [//NO_ERRORS_SCHEMA
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    // create the component
    fixture = TestBed.createComponent(SessionListComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    element = fixture.nativeElement;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
describe('display Inicial HTML', () => {
  let fixture: ComponentFixture<SessionListComponent>;
  let component: SessionListComponent;
  let element: HTMLElement;
  let debugElement: DebugElement;

  beforeEach(async(() => {
    const mockLogingService = {
      isAuthenticated(): boolean {
        return true;
      },
      currentUser: {}
    };
    const mockVoterService = {};
    // set the configuration like in appModel
    TestBed.configureTestingModule({
      imports: [],
      declarations: [ SessionListComponent, UpvoteComponent, CollapsibleWellComponent, DurationPipe ],
      // mock the service provider
      providers: [
        {provide: VoterService, userValue: mockVoterService},
        {provide: LoginService, userValue: mockLogingService}
      ],
      schemas: []
    });
  }));

  beforeEach(() => {
    // create the component
    fixture = TestBed.createComponent(SessionListComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    element = fixture.nativeElement;
    fixture.detectChanges();
  });

it('should ha the correct session name', () => {
  component.sessions = [
    { id : 3, name : 'session 1', presenter : 'presenter', duration : 1, level : 'beginer', abstract : 'abstract',
    voters : ['joel', 'joe', 'martin']}
  ];
  component.filterBy = 'all';
  component.sortBy = 'name';

  component.ngOnChanges();
  fixture.detectChanges();

  expect(element.querySelector('[well-title]').textContent).toContain('session 1');
});
});
