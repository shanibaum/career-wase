import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public isUserLoggedIn$: BehaviorSubject<string> = new BehaviorSubject<string>('');

  userName: string = null;

  constructor() { }

  setUserName(userName: string) {
    this.userName = userName;
  }

  getUserName() {
    return this.userName;
  }
}
