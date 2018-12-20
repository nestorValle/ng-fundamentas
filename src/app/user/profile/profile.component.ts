import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { IToastr } from 'src/app/Shared/event.module';
import { TOASTR_TOKEN } from 'src/app/Shared/toastr.injectorToken';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  firstName: FormControl;
  lastName: FormControl;
  constructor(
    private router: Router,
    private loginService: LoginService,
    @Inject(TOASTR_TOKEN) private toastr: IToastr) { }

  ngOnInit() {
    this.firstName = new FormControl(this.loginService.currentUser.firtName, [Validators.required, Validators.pattern('[a-zA-Z].*')]);
    this.lastName = new FormControl(this.loginService.currentUser.lastName, Validators.required);

    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    });
  }

  saveProfile(formGroup) {
    if (this.profileForm.valid) {
        this.loginService.saveProfile(formGroup.firstName, formGroup.lastName);
        this.toastr.success('Profile Changed');
    }
  }

  cancel() {
    this.router.navigate(['events']);
  }

  validateFirstNameForm() {
    return this.firstName.invalid;
  }

  validateLastNameForm() {
    return this.lastName.invalid;
  }
}
