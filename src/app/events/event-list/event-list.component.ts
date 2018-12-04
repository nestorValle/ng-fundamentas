import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
event1 = {
    id: 1,
    name: 'Angular connect',
    Date: '9/26/2036',
    Time: '10:10am',
    price: 654.0,
    imageUrl: 'assets/images/angularconnect-shield.png',
    locations: {
      address: '1057 dt',
      city: 'London',
      country: 'England',
    }
};
  constructor() { }
  handleEvent(data) {
    console.log(data);
  }
  ngOnInit() {
  }

}
