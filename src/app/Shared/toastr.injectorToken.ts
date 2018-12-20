import { InjectionToken } from '@angular/core';
import { IToastr } from './event.module';

export const TOASTR_TOKEN = new InjectionToken<IToastr>('TOASTR_TOKEN');
