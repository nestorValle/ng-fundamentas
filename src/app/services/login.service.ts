import { Injectable } from '@angular/core';
import { IUser } from '../user/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  currentUser: IUser;
  constructor() {}

  login(username: string, password: string): IUser {
    return (this.currentUser = {
      id: 1,
      firtName: username,
      lastName: 'csdcsd'
    });
  }

  isAuthenticated() {
    return !!this.currentUser;
  }
  saveProfile(firtName: string, lastName: string) {
    this.currentUser.firtName = firtName;
    this.currentUser.lastName = lastName;
  }
}
