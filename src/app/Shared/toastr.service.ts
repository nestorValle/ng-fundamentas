import { Injectable } from '@angular/core';
declare let toastr: any;

@Injectable({
  providedIn: 'root'
})
export class ToastrService {

  constructor() { }

  success(name) {
    toastr.success(name);
  }
  info(name: string, title?: string) {
       toastr.info(name, title);
  }
  warning(name: string, title?: string) {
    toastr.warning(name, title);
  }
  error(name: string, title?: string) {
    toastr.error(name, title);
  }
}
