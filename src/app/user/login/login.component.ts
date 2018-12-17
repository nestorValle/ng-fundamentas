import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
userName;
password;
mouseSubmitEnter: boolean;

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
  }
  login(valueForm) {
    console.log(valueForm);
    this.loginService.login(valueForm.userName, valueForm.password);
    this.router.navigate(['/events']);
  }
}
