import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventTumbnailComponent } from './event-tumbnail.component';

describe('EventTumbnailComponent', () => {
  let component: EventTumbnailComponent;
  let fixture: ComponentFixture<EventTumbnailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventTumbnailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventTumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
