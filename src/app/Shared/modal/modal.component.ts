import { Component, OnInit, Input, ViewChild, ElementRef, Inject } from '@angular/core';
import { JQ_TOKEN } from '../jQuery.injectorToke';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input() tittle: string;
  @Input() elementId: string;
  @ViewChild('modalContainer') modal: ElementRef;
  constructor(@Inject(JQ_TOKEN) private $: any) { }

  ngOnInit() {
  }
  closeModal() {
    this.$(this.modal.nativeElement).modal('hide');
  }
}
