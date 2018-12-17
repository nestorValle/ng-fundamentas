import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'src/app/Shared/toastr.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  events: [];
  constructor(private router: ActivatedRoute, private toastrService: ToastrService) {}

  tumbnailSucces(name: string) {
    this.toastrService.success(name);
  }

  handleEvent(data) {
    console.log(data);
  }
  ngOnInit() {
    this.events = this.router.snapshot.data['events'];
  }
}
