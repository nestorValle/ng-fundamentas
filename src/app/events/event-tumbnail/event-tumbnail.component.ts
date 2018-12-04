import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-event-tumbnail',
  templateUrl: './event-tumbnail.component.html',
  styleUrls: ['./event-tumbnail.component.css']
})
export class EventTumbnailComponent implements OnInit {
@Input() event: any;
@Output() handleEvent = new EventEmitter<string>();
  constructor() { }

  handleEventClick() {
    this.handleEvent.emit(this.event.name);
  }
  ngOnInit() {
  }

}
