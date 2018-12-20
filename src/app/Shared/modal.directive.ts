import { Directive, HostListener, OnInit, Inject, Input } from '@angular/core';
import { JQ_TOKEN } from './jQuery.injectorToke';


@Directive({
  selector: '[appModal]'
})
export class ModalDirective implements OnInit {
@Input() appModal: string;
  constructor(@Inject(JQ_TOKEN) private $: any) { }

  ngOnInit(): void {
  }

  @HostListener('click') onclick() {
    this.$(`#${this.appModal}`).modal({});
  }
}
