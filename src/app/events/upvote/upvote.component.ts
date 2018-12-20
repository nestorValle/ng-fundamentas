import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';


@Component({
  selector: 'app-upvote',
  templateUrl: './upvote.component.html',
  styleUrls: ['./upvote.component.css']
})
export class UpvoteComponent implements OnInit {
iconColor: string;
@Output() vote = new EventEmitter();
@Input() count: number;
@Input() set voted(value) {
  this.iconColor = value ? 'red' : 'white';
}
  constructor() { }

  ngOnInit() {
  }
  onClick() {
    this.vote.emit({});
  }
}
